const crypto = require('crypto');
const { getDatabase } = require('../../lib/mongodb');

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

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const rawBody = await getRawBody(req);
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'];

    // 1. Signature verification if webhook secret is configured
    if (webhookSecret && webhookSecret.trim()) {
      if (!signature) {
        return res.status(400).json({ success: false, error: 'Missing x-razorpay-signature header' });
      }

      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret.trim())
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
    const { db } = await getDatabase();

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
};
