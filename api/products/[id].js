const { getDatabase } = require('../../lib/mongodb');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { id } = req.query;
  if (!id) return res.status(400).json({ success: false, error: 'Product ID is required' });

  try {
    let product = null;
    try {
      const { db } = await getDatabase();
      product = await db.collection('products').findOne({
        $or: [{ id: id }, { _id: id }]
      });
    } catch (dbErr) {
      console.warn('MongoDB fallback for product detail:', dbErr.message);
      const { PRODUCTS } = require('../../js/products');
      product = (PRODUCTS || []).find(p => p.id === id);
    }

    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};