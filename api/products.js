const { getDatabase } = require('../lib/mongodb');

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
    const url = new URL(req.url, 'http://localhost');
    const id = req.query?.id || url.searchParams.get('id');

    // Handle single product detail if ID provided
    if (id) {
      let product = null;
      try {
        const { db } = await getDatabase();
        product = await db.collection('products').findOne({
          $or: [{ id: id }, { _id: id }]
        });
      } catch (dbErr) {
        console.warn('MongoDB fallback for product detail:', dbErr.message);
        const { PRODUCTS } = require('../js/products');
        product = (PRODUCTS || []).find(p => p.id === id);
      }

      if (!product) {
        return res.status(404).json({ success: false, error: 'Product not found' });
      }

      return res.status(200).json({ success: true, product });
    }

    // Otherwise handle product listing / filtering
    const category = req.query?.category || url.searchParams.get('category');
    const bestseller = req.query?.bestseller || url.searchParams.get('bestseller');
    const newArrival = req.query?.newArrival || url.searchParams.get('newArrival');
    const VALID_CATEGORIES = ['draped-saree', 'gown', 'lehenga', 'dress', 'cordset'];

    let products = [];
    try {
      const { db } = await getDatabase();
      const query = { status: { $ne: 'archived' } };

      if (category && category !== 'All Collections' && category !== 'All') {
        if (category === 'uncategorized') {
          query.$or = [
            { category: null },
            { category: { $exists: false } },
            { category: '' },
            { category: { $nin: VALID_CATEGORIES } }
          ];
        } else {
          query.category = category;
        }
      }
      if (bestseller === 'true') {
        query.isBestseller = true;
      }
      if (newArrival === 'true') {
        query.isNewArrival = true;
      }

      // One-time cleanup: ensure uncategorized products have category: null
      try {
        await db.collection('products').updateMany(
          { category: { $nin: [...VALID_CATEGORIES, null] } },
          { $set: { category: null } }
        );
      } catch (migErr) {}

      products = await db.collection('products').find(query).sort({ createdAt: -1 }).toArray();

      // Normalize category field
      products = products.map(p => ({
        ...p,
        category: VALID_CATEGORIES.includes(p.category) ? p.category : null
      }));

      // If database is empty or missing catalog items, seed / sync from default catalog
      if (!category && !bestseller && !newArrival) {
        try {
          const { PRODUCTS } = require('../js/products');
          if (PRODUCTS && PRODUCTS.length > products.length) {
            const existingIds = new Set(products.map(p => p.id));
            const missing = PRODUCTS.filter(p => !existingIds.has(p.id)).map(p => ({
              ...p,
              status: p.status || 'active',
              stock: p.stock || 20,
              createdAt: new Date(),
              updatedAt: new Date()
            }));
            if (missing.length > 0) {
              await db.collection('products').insertMany(missing);
              products = [...products, ...missing];
            }
          }
        } catch (seedErr) {
          console.warn('Catalog auto-sync notice:', seedErr.message);
        }
      }
    } catch (dbErr) {
      console.warn('MongoDB connection fallback:', dbErr.message);
      // Fallback to static catalog if DB connection not ready yet
      const { PRODUCTS } = require('../js/products');
      products = (PRODUCTS || []).map(p => ({
        ...p,
        category: VALID_CATEGORIES.includes(p.category) ? p.category : null
      }));
      if (category && category !== 'All Collections' && category !== 'All') {
        if (category === 'uncategorized') {
          products = products.filter(p => !p.category);
        } else {
          products = products.filter(p => p.category === category);
        }
      }
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