const Razorpay = require('razorpay');

let razorpayInstance = null;
let currentKeyId = null;

function cleanKey(val) {
  if (!val) return '';
  return String(val).trim().replace(/^["']|["']$/g, '');
}

function getRazorpayInstance() {
  const key_id = cleanKey(process.env.RAZORPAY_KEY_ID);
  const key_secret = cleanKey(process.env.RAZORPAY_KEY_SECRET);

  if (!key_id || !key_secret) {
    throw new Error('Razorpay credentials missing. Please configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.');
  }

  if (!razorpayInstance || currentKeyId !== key_id) {
    razorpayInstance = new Razorpay({
      key_id,
      key_secret
    });
    currentKeyId = key_id;
  }

  return razorpayInstance;
}

module.exports = {
  getRazorpayInstance,
  cleanKey
};
