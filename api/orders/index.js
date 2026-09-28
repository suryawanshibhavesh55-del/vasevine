const { getDatabase } = require('../../lib/mongodb');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  try {
    const {
      customer,
      shippingAddress,
      items,
      subtotal,
      deliveryCharge,
      total
    } = req.body || {};

    if (!customer || !customer.mobile || !shippingAddress || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid order data. Customer details, address, and items are required.'
      });
    }

    // Clean mobile number (last 10 digits)
    const cleanMobile = String(customer.mobile).replace(/\D/g, '').slice(-10);
    if (cleanMobile.length !== 10) {
      return res.status(400).json({ success: false, error: 'Valid 10-digit mobile number required' });
    }

    // Generate unique Order ID e.g. VS10842
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderId = `VS${randomSuffix}`;
    const now = new Date();

    // Preserve full immutable snapshot of products and pricing
    const orderSnapshotItems = items.map(item => ({
      productId: item.productId || item.id || '',
      productName: item.productName || item.name || 'VASEVINE Couture Garment',
      productImage: item.productImage || (item.images && item.images[0]) || '',
      size: item.size || 'M',
      quantity: Number(item.quantity) || 1,
      unitPrice: Number(item.unitPrice || item.price) || 0
    }));

    const newOrder = {
      orderId,
      customer: {
        name: customer.name || 'Valued Client',
        mobile: cleanMobile,
        email: customer.email || ''
      },
      shippingAddress: {
        address: shippingAddress.address || '',
        city: shippingAddress.city || '',
        state: shippingAddress.state || '',
        pincode: shippingAddress.pincode || ''
      },
      items: orderSnapshotItems,
      subtotal: Number(subtotal) || 0,
      deliveryCharge: Number(deliveryCharge) || 500,
      total: Number(total) || (Number(subtotal) + Number(deliveryCharge)),
      // Payment fields (prepared for Razorpay)
      paymentStatus: 'Pending',
      paymentGateway: 'Razorpay',
      razorpayOrderId: null,
      razorpayPaymentId: null,
      razorpaySignature: null,
      // Order status & lifecycle
      orderStatus: 'Order Placed',
      statusHistory: [
        {
          status: 'Order Placed',
          timestamp: now.toISOString(),
          note: 'Order registered successfully'
        }
      ],
      createdAt: now,
      updatedAt: now
    };

    try {
      const { db } = await getDatabase();
      await db.collection('orders').insertOne(newOrder);
    } catch (dbErr) {
      console.warn('MongoDB order insert warning (falling back to response):', dbErr.message);
    }

    return res.status(201).json({
      success: true,
      orderId,
      order: newOrder
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ success: false, error: 'Internal server error while placing order' });
  }
};