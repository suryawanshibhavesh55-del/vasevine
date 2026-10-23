const crypto = require('crypto');
const { getDatabase } = require('../../lib/mongodb');
const { getRazorpayInstance, cleanKey } = require('../../lib/razorpay');
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

// Helper to obtain raw request body in Vercel Serverless Function
async function getRawBody(req) {
  if (req.rawBody) return req.rawBody;
  if (Buffer.isBuffer(req.body)) return req.body.toString('utf8');
  if (typeof req.body === 'string') return req.body;

  return new Promise((resolve) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
    });
    req.on('end', () => {
      if (raw.length > 0) {
        resolve(raw);
      } else if (req.body && typeof req.body === 'object') {
        resolve(JSON.stringify(req.body));
      } else {
        resolve('');
      }
    });
  });
}

function getPaymentAction(req) {
  try {
    const url = new URL(req.url, 'http://localhost');
    const segments = url.pathname.split('/').filter(Boolean);
    const paymentIndex = segments.indexOf('payment');
    if (paymentIndex !== -1 && segments[paymentIndex + 1]) {
      return segments[paymentIndex + 1].toLowerCase();
    }
  } catch (e) {}
  if (req.query && req.query.action) {
    return String(req.query.action).toLowerCase();
  }
  return '';
}

// 1. CONFIG
async function handleConfig(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const keyId = cleanKey(process.env.RAZORPAY_KEY_ID);
  if (!keyId) {
    return res.status(500).json({
      success: false,
      error: 'Razorpay Key ID is not configured on server'
    });
  }

  // Safe public configuration only - NEVER EXPOSE KEY SECRET
  return res.status(200).json({
    success: true,
    keyId
  });
}

// 2. CREATE-ORDER
async function handleCreateOrder(req, res) {
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
      const rzpCode = rzpErr?.error?.code || rzpErr?.code || 'GATEWAY_ERROR';
      const rzpDesc = rzpErr?.error?.description || rzpErr?.message || 'Gateway error';
      console.error('[Razorpay Order Creation Error]', {
        action: 'create-order',
        method: req.method,
        stage: 'razorpay.orders.create',
        errorName: rzpErr?.name || 'Error',
        errorMessage: rzpErr?.message,
        statusCode: rzpErr?.statusCode,
        code: rzpCode,
        description: rzpDesc
      });
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
      keyId: cleanKey(process.env.RAZORPAY_KEY_ID),
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
}

// 3. VERIFY-PAYMENT (also serves as canonical verify)
async function handleVerifyPayment(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const orderId = body.orderId || body.localOrderId;
    const razorpayOrderId = body.razorpayOrderId || body.razorpay_order_id;
    const razorpayPaymentId = body.razorpayPaymentId || body.razorpay_payment_id;
    const razorpaySignature = body.razorpaySignature || body.razorpay_signature;

    if (!orderId || !razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return res.status(400).json({
        success: false,
        error: 'Missing required payment verification parameters (orderId, razorpayOrderId, razorpayPaymentId, razorpaySignature)'
      });
    }

    const keySecret = cleanKey(process.env.RAZORPAY_KEY_SECRET);
    if (!keySecret) {
      return res.status(500).json({
        success: false,
        error: 'Payment gateway secret not configured on server'
      });
    }

    // 1. Cryptographic HMAC SHA256 Signature Verification
    const bodyPayload = `${razorpayOrderId}|${razorpayPaymentId}`;
    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(bodyPayload)
      .digest('hex');

    if (generatedSignature !== razorpaySignature) {
      console.warn(`Signature mismatch for Order ${orderId}: Expected ${generatedSignature}, got ${razorpaySignature}`);
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed: Signature mismatch. Potential tampering detected.'
      });
    }

    // 2. Fetch payment details directly from Razorpay API
    let paymentDetails = null;
    try {
      const razorpay = getRazorpayInstance();
      paymentDetails = await razorpay.payments.fetch(razorpayPaymentId);
    } catch (fetchErr) {
      console.error('Failed to fetch payment from Razorpay API:', fetchErr.message);
      return res.status(502).json({
        success: false,
        error: 'Unable to verify payment with Razorpay. Please contact support.'
      });
    }

    // 3. Verify payment status, currency, and order id
    if (!paymentDetails || paymentDetails.order_id !== razorpayOrderId) {
      return res.status(400).json({
        success: false,
        error: 'Payment order ID does not match expected Razorpay order'
      });
    }

    if (!['captured', 'authorized'].includes(paymentDetails.status)) {
      return res.status(400).json({
        success: false,
        error: `Payment is not captured. Current status: ${paymentDetails.status}`
      });
    }

    if (paymentDetails.currency !== 'INR') {
      return res.status(400).json({
        success: false,
        error: `Invalid currency detected: ${paymentDetails.currency}`
      });
    }

    // 4. Update MongoDB order
    let db = null;
    try {
      const dbRes = await getDatabase();
      db = dbRes ? dbRes.db : null;
    } catch (dbErr) {
      console.warn('MongoDB verify connection warning:', dbErr.message);
    }

    if (!db) {
      return res.status(503).json({
        success: false,
        error: 'Database connection unavailable'
      });
    }

    const existingOrder = await db.collection('orders').findOne({
      $or: [
        { orderId: orderId },
        { razorpayOrderId: razorpayOrderId }
      ]
    });

    if (!existingOrder) {
      return res.status(404).json({
        success: false,
        error: `Order #${orderId} was not found in the database`
      });
    }

    // 5. Verify payable amount in paise
    const expectedPaise = Math.round(Number(existingOrder.total) * 100);
    if (Number(paymentDetails.amount) !== expectedPaise) {
      console.warn(`Amount mismatch for Order #${orderId}: expected ${expectedPaise} paise, got ${paymentDetails.amount}`);
      return res.status(400).json({
        success: false,
        error: 'Paid amount does not match expected order total'
      });
    }

    // 6. Check idempotency: If already paid, return early
    if (existingOrder.paymentStatus === 'Paid') {
      return res.status(200).json({
        success: true,
        message: 'Order was already verified as Paid',
        orderId: existingOrder.orderId,
        order: existingOrder
      });
    }

    const now = new Date();
    const updateResult = await db.collection('orders').findOneAndUpdate(
      {
        _id: existingOrder._id,
        paymentStatus: { $ne: 'Paid' } // atomic idempotency guard
      },
      {
        $set: {
          paymentStatus: 'Paid',
          inventoryDeducted: true,
          paymentMethod: paymentDetails.method || 'online',
          paymentGateway: 'Razorpay',
          razorpayPaymentId: razorpayPaymentId,
          razorpayOrderId: razorpayOrderId,
          razorpaySignature: razorpaySignature,
          paidAt: now,
          orderStatus: 'Order Confirmed',
          updatedAt: now
        },
        $push: {
          statusHistory: {
            status: 'Order Confirmed',
            timestamp: now.toISOString(),
            note: `Payment verified successfully via Razorpay (ID: ${razorpayPaymentId}, Method: ${paymentDetails.method || 'Online'})`
          }
        }
      },
      { returnDocument: 'after' }
    );

    const updatedDoc = updateResult && (updateResult.value || updateResult);

    // 7. Idempotently deduct inventory for confirmed paid items
    if (existingOrder.items && Array.isArray(existingOrder.items)) {
      for (const item of existingOrder.items) {
        if (item.productId) {
          try {
            await db.collection('products').updateOne(
              {
                $or: [{ id: item.productId }, { _id: item.productId }],
                stock: { $gte: Number(item.quantity) || 1 }
              },
              {
                $inc: { stock: -1 * (Number(item.quantity) || 1) }
              }
            );
          } catch (stockErr) {
            console.warn('Stock update notice:', stockErr.message);
          }
        }
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Payment verified and order confirmed successfully',
      orderId: existingOrder.orderId,
      razorpayPaymentId,
      order: updatedDoc || existingOrder
    });
  } catch (err) {
    console.error('Error verifying payment:', err);
    return res.status(500).json({
      success: false,
      error: 'Server error while verifying payment'
    });
  }
}

// 4. WEBHOOK
async function handleWebhook(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const rawBody = await getRawBody(req);
    const webhookSecret = cleanKey(process.env.RAZORPAY_WEBHOOK_SECRET);
    const signature = req.headers['x-razorpay-signature'];

    // 1. Signature verification if webhook secret is configured
    if (webhookSecret) {
      if (!signature) {
        return res.status(400).json({ success: false, error: 'Missing x-razorpay-signature header' });
      }

      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(rawBody)
        .digest('hex');

      if (expectedSignature !== signature) {
        console.warn('Razorpay Webhook Signature Mismatch');
        return res.status(400).json({ success: false, error: 'Invalid webhook signature' });
      }
    }

    // 2. Parse event payload
    let event = null;
    try {
      event = typeof req.body === 'object' && req.body !== null ? req.body : JSON.parse(rawBody);
    } catch (parseErr) {
      return res.status(400).json({ success: false, error: 'Invalid JSON payload' });
    }

    if (!event || !event.event) {
      return res.status(400).json({ success: false, error: 'Unrecognized event structure' });
    }

    const eventId = event.id || `${event.event}_${Date.now()}`;
    let db = null;
    try {
      const dbRes = await getDatabase();
      db = dbRes ? dbRes.db : null;
    } catch (dbErr) {
      console.warn('MongoDB webhook connection warning:', dbErr.message);
    }

    // 3. Idempotency Check: record event ID to prevent duplicate processing
    if (db) {
      try {
        const existingEvent = await db.collection('webhook_events').findOne({ eventId });
        if (existingEvent) {
          console.log(`Webhook event ${eventId} already processed (idempotent skip).`);
          return res.status(200).json({ status: 'ok', message: 'Event already processed' });
        }
        await db.collection('webhook_events').insertOne({
          eventId,
          event: event.event,
          receivedAt: new Date()
        });
      } catch (evtErr) {
        console.warn('Webhook events collection notice:', evtErr.message);
      }
    }

    const payload = event.payload || {};
    const payment = payload.payment && payload.payment.entity;
    const orderEntity = payload.order && payload.order.entity;

    // 4. Handle Successful Payment Events
    if (event.event === 'payment.captured' || event.event === 'order.paid') {
      const razorpayOrderId = (payment && payment.order_id) || (orderEntity && orderEntity.id);
      const razorpayPaymentId = payment && payment.id;
      const localOrderId = payment && payment.notes && payment.notes.localOrderId;

      if (db && (razorpayOrderId || localOrderId)) {
        const orderQuery = {
          $or: [
            ...(razorpayOrderId ? [{ razorpayOrderId }] : []),
            ...(localOrderId ? [{ orderId: localOrderId }] : [])
          ]
        };

        const existingOrder = await db.collection('orders').findOne(orderQuery);

        if (existingOrder && existingOrder.paymentStatus !== 'Paid') {
          const now = new Date();
          await db.collection('orders').updateOne(
            { _id: existingOrder._id, paymentStatus: { $ne: 'Paid' } },
            {
              $set: {
                paymentStatus: 'Paid',
                inventoryDeducted: true,
                paymentMethod: (payment && payment.method) || 'online',
                paidAt: now,
                razorpayPaymentId: razorpayPaymentId || existingOrder.razorpayPaymentId,
                razorpayOrderId: razorpayOrderId || existingOrder.razorpayOrderId,
                orderStatus: 'Order Confirmed',
                updatedAt: now
              },
              $push: {
                statusHistory: {
                  status: 'Order Confirmed',
                  timestamp: now.toISOString(),
                  note: `Confirmed via Razorpay Webhook event: ${event.event} (Payment ID: ${razorpayPaymentId || 'N/A'})`
                }
              }
            }
          );

          // Deduct stock idempotently
          if (existingOrder.items && Array.isArray(existingOrder.items)) {
            for (const item of existingOrder.items) {
              if (item.productId) {
                try {
                  await db.collection('products').updateOne(
                    {
                      $or: [{ id: item.productId }, { _id: item.productId }],
                      stock: { $gte: Number(item.quantity) || 1 }
                    },
                    {
                      $inc: { stock: -1 * (Number(item.quantity) || 1) }
                    }
                  );
                } catch (stockErr) {}
              }
            }
          }
        }
      }
    }

    // 5. Handle Payment Failed Events
    if (event.event === 'payment.failed') {
      const razorpayOrderId = payment && payment.order_id;
      const localOrderId = payment && payment.notes && payment.notes.localOrderId;

      if (db && (razorpayOrderId || localOrderId)) {
        const orderQuery = {
          $or: [
            ...(razorpayOrderId ? [{ razorpayOrderId }] : []),
            ...(localOrderId ? [{ orderId: localOrderId }] : [])
          ]
        };

        const existingOrder = await db.collection('orders').findOne(orderQuery);
        if (existingOrder && existingOrder.paymentStatus !== 'Paid') {
          await db.collection('orders').updateOne(
            { _id: existingOrder._id, paymentStatus: 'Pending' },
            {
              $set: {
                paymentStatus: 'Failed',
                updatedAt: new Date()
              },
              $push: {
                statusHistory: {
                  status: 'Payment Failed',
                  timestamp: new Date().toISOString(),
                  note: `Payment attempt failed: ${payment.error_description || 'Transaction declined'}`
                }
              }
            }
          );
        }
      }
    }

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Fatal Razorpay Webhook Error:', err);
    return res.status(500).json({ success: false, error: 'Internal webhook error' });
  }
}

// MAIN DYNAMIC DISPATCHER
module.exports = async (req, res) => {
  const action = getPaymentAction(req);
  switch (action) {
    case 'config':
      return handleConfig(req, res);
    case 'create-order':
      return handleCreateOrder(req, res);
    case 'verify-payment':
    case 'verify':
      return handleVerifyPayment(req, res);
    case 'webhook':
      return handleWebhook(req, res);
    default:
      return res.status(404).json({ success: false, error: `Payment endpoint '/api/payment/${action || 'unknown'}' not found` });
  }
};
