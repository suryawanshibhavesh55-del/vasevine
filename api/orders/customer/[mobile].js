const { getDatabase } = require('../../../lib/mongodb');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { mobile } = req.query;
  const cleanMobile = String(mobile || '').replace(/\D/g, '').slice(-10);

  if (!cleanMobile || cleanMobile.length !== 10) {
    return res.status(400).json({ success: false, error: 'Valid 10-digit mobile number required' });
  }

  try {
    let orders = [];
    try {
      const { db } = await getDatabase();
      orders = await db.collection('orders')
        .find({ 'customer.mobile': cleanMobile })
        .sort({ createdAt: -1 })
        .toArray();
    } catch (dbErr) {
      console.warn('MongoDB customer lookup fallback:', dbErr.message);
    }

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    console.error('Error looking up customer orders:', error);
    return res.status(500).json({ success: false, error: 'Unable to retrieve customer orders' });
  }
};