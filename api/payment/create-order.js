const { getDatabase } = require('../../lib/mongodb');
const { getRazorpayInstance } = require('../../lib/razorpay');
const { validateDeliveryPincode } = require('../../lib/delivery');
const { PRODUCTS } = require('../../js/products');
const { ObjectId } = require('mongodb');

function buildIdQuery(rawId) {
  if (!rawId) return { _id: null };
  const queries = [{ id: rawId }];
  if (typeof rawId === 'string' && ObjectId.isValid(rawId) && rawId.length === 24) {
    try {
      queries.push({ _id: new ObjectId(rawId) });
    } catch (e) {}
  }
  queries.push({ _id: rawId });
  return { $or: queries };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const {
      customer,
      shippingAddress,
      items
    } = req.body || {};

    // 1. Validate customer details
    if (!customer || !customer.name || !customer.mobile) {
      return res.status(400).json({
        success: false,
        error: 'Customer name and phone number are required.'
      });
    }

    const cleanMobile = String(customer.mobile).replace(/\D/g, '').slice(-10);
    if (!cleanMobile || cleanMobile.length !== 10) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid 10-digit mobile number.'
      });
    }

    // 2. Validate shipping address and PIN code
    if (!shippingAddress || !shippingAddress.address || !shippingAddress.pincode) {
      return res.status(400).json({
        success: false,
        error: 'Shipping address and 6-digit PIN code are required.'
      });
    }

    const deliveryValidation = await validateDeliveryPincode(shippingAddress.pincode);
    if (!deliveryValidation.isValid) {
      return res.status(400).json({
        success: false,
        error: deliveryValidation.error || 'Invalid 6-digit Indian PIN code.'
      });
    }

    // 3. Validate items array
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Your shopping cart is empty.'
      });
    }

    // 4. Server-side product price validation against MongoDB
    let db = null;
    try {
      const dbRes = await getDatabase();
      db = dbRes.db;
    } catch (dbErr) {
      console.warn('MongoDB connection warning in create-order:', dbErr.message);
    }

    let subtotal = 0;
    const orderSnapshotItems = [];

    for (const item of items) {
      const targetId = item.productId || item.id;
      if (!targetId) continue;

      let productDoc = null;
      if (db) {
        try {
          productDoc = await db.collection('products').findOne(buildIdQuery(targetId));
        } catch (queryErr) {
          console.warn('Product DB query warning:', queryErr.message);
        }
      }

      // Fallback to static catalog if DB is temporarily unreachable
      if (!productDoc && PRODUCTS) {
        productDoc = PRODUCTS.find(p => p.id === targetId);
      }

      if (!productDoc) {
        return res.status(400).json({
          success: false,
          error: `Item "${item.productName || targetId}" is no longer available in the catalog.`
        });
      }

      if (productDoc.status === 'archived') {
        return res.status(400).json({
          success: false,
          error: `Item "${productDoc.name}" is currently unavailable.`
        });
      }

      const realPrice = Number(productDoc.price);
      if (isNaN(realPrice) || realPrice <= 0) {
        return res.status(400).json({
          success: false,
          error: `Invalid pricing detected for product "${productDoc.name}".`
        });
      }

      const qty = Math.max(1, parseInt(item.quantity || item.qty || 1, 10));
      subtotal += realPrice * qty;

      orderSnapshotItems.push({
        productId: productDoc.id || String(productDoc._id),
        productName: productDoc.name,
        selectedSize: item.size || 'M',
        size: item.size || 'M',
        quantity: qty,
        unitPrice: realPrice,
        productImage: (productDoc.images && productDoc.images[0]) || item.productImage || '',
        category: productDoc.category || null
      });
    }

    if (orderSnapshotItems.length === 0 || subtotal <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid order contents or zero total.'
      });
    }

    // 5. Calculate final payable total including server-validated delivery
    const deliveryCharge = Number(deliveryValidation.deliveryCharge);
    const finalTotal = subtotal + deliveryCharge;
    const amountInPaise = Math.round(finalTotal * 100);

    // 6. Generate local order ID
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const localOrderId = `VS${randomSuffix}`;
    const now = new Date();

    // 7. Create Razorpay order via SDK
    let rzpOrder = null;
    try {
      const razorpay = getRazorpayInstance();
      rzpOrder = await razorpay.orders.create({
        amount: amountInPaise,
        currency: 'INR',
        receipt: localOrderId,
        notes: {
          localOrderId,
          customerName: customer.name.trim(),
          customerMobile: cleanMobile
        }
      });
    } catch (rzpErr) {
      console.error('Razorpay Order Creation Error:', rzpErr);
      return res.status(500).json({
        success: false,
        error: 'Unable to initiate payment gateway. Please verify connection and try again.'
      });
    }

    // 8. Save local order in MongoDB with status Pending
    const newOrder = {
      orderId: localOrderId,
      razorpayOrderId: rzpOrder.id,
      razorpayPaymentId: null,
      razorpaySignature: null,
      customer: {
        name: customer.name.trim(),
        mobile: cleanMobile,
        email: (customer.email || '').trim()
      },
      shippingAddress: {
        address: (shippingAddress.address || '').trim(),
        city: (deliveryValidation.city || shippingAddress.city || '').trim(),
        state: (deliveryValidation.state || shippingAddress.state || '').trim(),
        pincode: deliveryValidation.pincode
      },
      items: orderSnapshotItems,
      subtotal,
      deliveryCharge,
      total: finalTotal,
      currency: 'INR',
      paymentStatus: 'Pending',
      inventoryDeducted: false,
      paymentGateway: 'Razorpay',
      orderStatus: 'Order Placed',
      statusHistory: [
        {
          status: 'Order Placed',
          timestamp: now.toISOString(),
          note: `Order initiated. Razorpay order ${rzpOrder.id} created.`
        }
      ],
      createdAt: now,
      updatedAt: now
    };

    if (db) {
      try {
        await db.collection('orders').insertOne(newOrder);
      } catch (insertErr) {
        console.error('MongoDB order save error:', insertErr);
      }
    }

    // 9. Return safe details to frontend (NEVER send Key Secret)
    return res.status(200).json({
      success: true,
      orderId: localOrderId,
      razorpayOrderId: rzpOrder.id,
      amount: rzpOrder.amount, // in paise
      currency: rzpOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID ? process.env.RAZORPAY_KEY_ID.trim() : '',
      customer: {
        name: newOrder.customer.name,
        email: newOrder.customer.email,
        mobile: newOrder.customer.mobile
      },
      shippingAddress: newOrder.shippingAddress,
      subtotal,
      deliveryCharge,
      total: finalTotal
    });
  } catch (err) {
    console.error('Fatal error creating payment order:', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while creating order'
    });
  }
};
