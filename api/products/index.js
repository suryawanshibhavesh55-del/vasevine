const { getDatabase } = require('../../lib/mongodb');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { category, bestseller, newArrival } = req.query;

    let products = [];
    try {
      const { db } = await getDatabase();
      const query = { status: { $ne: 'archived' } };

      if (category && category !== 'All Collections') {
        query.category = category;
      }
      if (bestseller === 'true') {
        query.isBestseller = true;
      }
      if (newArrival === 'true') {
        query.isNewArrival = true;
      }

      products = await db.collection('products').find(query).sort({ createdAt: -1 }).toArray();

      // If database is empty, seed from default catalog if available
      if (products.length === 0 && !category && !bestseller && !newArrival) {
        try {
          const { PRODUCTS } = require('../../js/products');
          if (PRODUCTS && PRODUCTS.length > 0) {
            const seedData = PRODUCTS.map(p => ({
              ...p,
              status: p.status || 'active',
              stock: p.stock || 20,
              createdAt: new Date(),
              updatedAt: new Date()
            }));
            await db.collection('products').insertMany(seedData);
            products = seedData;
          }
        } catch (seedErr) {
          console.warn('Catalog auto-seed notice:', seedErr.message);
        }
      }
    } catch (dbErr) {
      console.warn('MongoDB connection fallback:', dbErr.message);
      // Fallback to static catalog if DB connection not ready yet
      const { PRODUCTS } = require('../../js/products');
      products = PRODUCTS || [];
    }

    return res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch products' });
  }
};