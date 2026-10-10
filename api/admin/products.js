const { verifyAdmin } = require('../../lib/auth');
const { getDatabase } = require('../../lib/mongodb');
const { PRODUCTS } = require('../../js/products');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  const url = new URL(req.url, 'http://localhost');
  const queryId = req.query?.id || url.searchParams.get('id');

  let db = null;
  let dbConnected = false;
  let dbError = null;
  try {
    const dbRes = await getDatabase();
    db = dbRes.db;
    dbConnected = true;
  } catch (err) {
    dbError = err.message;
    console.warn('MongoDB admin products connection warning:', err.message);
  }

  // GET: list products
  if (req.method === 'GET') {
    try {
      const category = req.query?.category || url.searchParams.get('category');
      const status = req.query?.status || url.searchParams.get('status');

      let products = [];
      if (dbConnected && db) {
        try {
          const query = {};
          if (category && category !== 'All') query.category = category;
          if (status && status !== 'All') query.status = status;

          products = await db.collection('products').find(query).sort({ createdAt: -1 }).toArray();

          // Auto-seed / sync to MongoDB if collection is empty or missing catalog items
          if ((!category || category === 'All') && (!status || status === 'All')) {
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
          }
        } catch (queryErr) {
          console.warn('MongoDB query warning in admin products:', queryErr.message);
        }
      }

      // If DB returned empty or was offline, fallback to the 80 client catalog products
      if (!products || products.length === 0) {
        products = (PRODUCTS || []).map(p => ({
          ...p,
          status: p.status || 'active',
          stock: p.stock || 20
        }));

        if (category && category !== 'All') {
          products = products.filter(p => p.category === category);
        }
        if (status && status !== 'All') {
          products = products.filter(p => (p.status || 'active') === status);
        }
      }

      return res.status(200).json({
        success: true,
        count: products.length,
        products,
        dbConnected,
        dbError
      });
    } catch (err) {
      console.error('Error listing admin products:', err);
      return res.status(200).json({
        success: true,
        count: (PRODUCTS || []).length,
        products: PRODUCTS || [],
        dbConnected: false,
        error: err.message
      });
    }
  }

  // POST: create new product
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

      if (dbConnected && db) {
        await db.collection('products').insertOne(newProduct);
      }

      return res.status(201).json({
        success: true,
        product: newProduct,
        dbConnected,
        message: dbConnected ? 'Product saved to MongoDB Atlas' : 'Product created in memory (DB disconnected)'
      });
    } catch (err) {
      console.error('Error adding product:', err);
      return res.status(500).json({ success: false, error: 'Failed to add product' });
    }
  }

  // PUT: update product
  if (req.method === 'PUT') {
    const id = queryId || req.body?.id;
    if (!id) return res.status(400).json({ success: false, error: 'Product ID required' });

    try {
      const updateData = { ...req.body, updatedAt: new Date() };
      delete updateData._id;
      delete updateData.id;

      if (updateData.price) updateData.price = Number(updateData.price);
      if (updateData.stock !== undefined) updateData.stock = Number(updateData.stock);

      if (dbConnected && db) {
        const result = await db.collection('products').findOneAndUpdate(
          { $or: [{ id: id }, { _id: id }] },
          { $set: updateData },
          { returnDocument: 'after' }
        );
        if (result) return res.status(200).json({ success: true, product: result, dbConnected: true });
      }

      return res.status(200).json({
        success: true,
        product: { id, ...updateData },
        dbConnected,
        message: 'Updated successfully'
      });
    } catch (err) {
      console.error('Error updating product:', err);
      return res.status(500).json({ success: false, error: 'Failed to update product' });
    }
  }

  // DELETE: soft-delete product (status = 'archived')
  if (req.method === 'DELETE') {
    const id = queryId || req.body?.id;
    if (!id) return res.status(400).json({ success: false, error: 'Product ID required' });

    try {
      if (dbConnected && db) {
        await db.collection('products').findOneAndUpdate(
          { $or: [{ id: id }, { _id: id }] },
          { $set: { status: 'archived', updatedAt: new Date() } },
          { returnDocument: 'after' }
        );
      }

      return res.status(200).json({ success: true, message: 'Product archived successfully', dbConnected });
    } catch (err) {
      console.error('Error archiving product:', err);
      return res.status(500).json({ success: false, error: 'Failed to archive product' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};