const Razorpay = require('razorpay');

let razorpayInstance = null;

function getRazorpayInstance() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    throw new Error('Razorpay credentials missing. Please configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.');
  }

  if (!razorpayInstance) {
    razorpayInstance = new Razorpay({
      key_id: key_id.trim(),
      key_secret: key_secret.trim()
    });
  }

  return razorpayInstance;
}

module.exports = {
  getRazorpayInstance
};
