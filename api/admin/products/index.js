const { verifyAdmin } = require('../../../lib/auth');
const { getDatabase } = require('../../../lib/mongodb');

module.exports = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  const { db } = await getDatabase();

  if (req.method === 'GET') {
    try {
      const { category, status } = req.query;
      const query = {};
      if (category && category !== 'All') query.category = category;
      if (status && status !== 'All') query.status = status;

      const products = await db.collection('products').find(query).sort({ createdAt: -1 }).toArray();
      return res.status(200).json({ success: true, count: products.length, products });
    } catch (err) {
      console.error('Error listing admin products:', err);
      return res.status(500).json({ success: false, error: 'Failed to list products' });
    }
  }

  if (req.method === 'POST') {
    try {
      const {
        name,
        price,
        originalPrice,
        description,
        fabric,
        category,
        sizes,
        stock,
        images,
        status,
        isBestseller,
        isNewArrival
      } = req.body || {};

      if (!name || !price) {
        return res.status(400).json({ success: false, error: 'Product name and price are required' });
      }

      const randomId = 'v-cp-' + Math.floor(100 + Math.random() * 900);
      const now = new Date();

      const newProduct = {
        id: randomId,
        name: String(name).trim(),
        price: Number(price),
        originalPrice: Number(originalPrice) || Math.round(Number(price) * 1.25),
        description: description || 'A refined VASEVINE statement silhouette crafted with structured detailing.',
        fabric: fabric || 'Luxury Silk & Organza Blend',
        category: category || 'Dresses',
        sizes: Array.isArray(sizes) && sizes.length > 0 ? sizes : ['XS', 'S', 'M', 'L', 'XL'],
        stock: Number(stock) || 15,
        images: Array.isArray(images) && images.length > 0 ? images : ['assets/products/client_prod_001.jpg'],
        status: status || 'active',
        isBestseller: Boolean(isBestseller),
        isNewArrival: Boolean(isNewArrival),
        createdAt: now,
        updatedAt: now
      };

      await db.collection('products').insertOne(newProduct);
      return res.status(201).json({ success: true, product: newProduct });
    } catch (err) {
      console.error('Error adding product:', err);
      return res.status(500).json({ success: false, error: 'Failed to add product' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};