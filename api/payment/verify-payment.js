const crypto = require('crypto');
const { getDatabase } = require('../../lib/mongodb');
const { getRazorpayInstance } = require('../../lib/razorpay');

module.exports = async (req, res) => {
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

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return res.status(500).json({
        success: false,
        error: 'Payment gateway secret not configured on server'
      });
    }

    // 1. Cryptographic HMAC SHA256 Signature Verification
    const bodyPayload = `${razorpayOrderId}|${razorpayPaymentId}`;
    const generatedSignature = crypto
      .createHmac('sha256', keySecret.trim())
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
    const { db } = await getDatabase();
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
};
