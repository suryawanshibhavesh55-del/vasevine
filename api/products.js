const { getDatabase } = require('../lib/mongodb');
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
        const { db } = await getDatabase('vasevine');
        product = await db.collection('products').findOne(buildIdQuery(id));
      } catch (dbErr) {
        console.warn('MongoDB fallback for product detail:', dbErr.message);
        const { PRODUCTS } = require('../js/products');
        product = (PRODUCTS || []).find(p => p.id === id);
      }

      // Hide or reject archived products from public view
      if (!product || product.status === 'archived') {
        return res.status(404).json({ success: false, error: 'Product not found or unavailable' });
      }

      return res.status(200).json({ success: true, product });
    }

    // Otherwise handle public product listing / filtering (ONLY active products)
    const category = req.query?.category || url.searchParams.get('category');
    const bestseller = req.query?.bestseller || url.searchParams.get('bestseller');
    const newArrival = req.query?.newArrival || url.searchParams.get('newArrival');
    const VALID_CATEGORIES = ['draped-saree', 'gown', 'lehenga', 'dress', 'cordset'];

    let products = [];
    try {
      const { db } = await getDatabase('vasevine');
      const query = { status: { $nin: ['archived', 'draft', 'deleted'] } };

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

      products = await db.collection('products').find(query).sort({ createdAt: -1 }).toArray();

      // Normalize category field
      products = products.map(p => ({
        ...p,
        category: VALID_CATEGORIES.includes(p.category) ? p.category : null
      }));
    } catch (dbErr) {
      console.warn('MongoDB connection fallback:', dbErr.message);
      // Fallback to static catalog if DB connection not ready yet
      const { PRODUCTS } = require('../js/products');
      products = (PRODUCTS || []).filter(p => !p.status || p.status === 'active').map(p => ({
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

    // Safeguard: if query returned 0 products for general catalog, fall back to static catalog
    if ((!products || products.length === 0) && (!category || category === 'All Collections' || category === 'All')) {
      const { PRODUCTS } = require('../js/products');
      products = (PRODUCTS || []).filter(p => !p.status || p.status === 'active').map(p => ({
        ...p,
        category: VALID_CATEGORIES.includes(p.category) ? p.category : null
      }));
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
