const { verifyAdmin } = require('../../lib/auth');
const { getDatabase } = require('../../lib/mongodb');
const { PRODUCTS } = require('../../js/products');
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
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  const url = new URL(req.url, 'http://localhost');
  const queryId = req.query?.id || url.searchParams.get('id');
  const VALID_CATEGORIES = ['draped-saree', 'gown', 'lehenga', 'dress', 'cordset'];

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
          if (category && category !== 'All') {
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
          if (status && status !== 'All') query.status = status;

          // One-time cleanup for any legacy non-standard category values in DB
          try {
            await db.collection('products').updateMany(
              { category: { $nin: [...VALID_CATEGORIES, null] } },
              { $set: { category: null } }
            );
          } catch (migErr) {}

          products = await db.collection('products').find(query).sort({ createdAt: -1 }).toArray();

          // Normalize category
          products = products.map(p => ({
            ...p,
            category: VALID_CATEGORIES.includes(p.category) ? p.category : null
          }));
        } catch (queryErr) {
          console.warn('MongoDB query warning in admin products:', queryErr.message);
        }
      }

      // Fallback ONLY if MongoDB is disconnected / unreachable
      if (!dbConnected) {
        products = (PRODUCTS || []).map(p => ({
          ...p,
          status: p.status || 'active',
          stock: p.stock || 20
        }));

        if (category && category !== 'All') {
          if (category === 'uncategorized') {
            products = products.filter(p => !p.category || !VALID_CATEGORIES.includes(p.category));
          } else {
            products = products.filter(p => p.category === category);
          }
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

      const validCategory = VALID_CATEGORIES.includes(category) ? category : null;
      if (!validCategory) {
        return res.status(400).json({ success: false, error: 'Category is required (Draped Saree, Gown, Lehenga, Dress, or Cordset)' });
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
        category: validCategory,
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

  // PUT: update product (edit fields, archive, restore)
  if (req.method === 'PUT') {
    const id = queryId || req.body?.id;
    if (!id) return res.status(400).json({ success: false, error: 'Product ID required' });

    try {
      const updateData = { ...req.body, updatedAt: new Date() };
      delete updateData._id;
      delete updateData.id;

      if (updateData.price !== undefined) updateData.price = Number(updateData.price);
      if (updateData.originalPrice !== undefined) updateData.originalPrice = Number(updateData.originalPrice);
      if (updateData.stock !== undefined) updateData.stock = Number(updateData.stock);
      if (updateData.category !== undefined) {
        updateData.category = VALID_CATEGORIES.includes(updateData.category) ? updateData.category : null;
      }
      if (updateData.status !== undefined) {
        const validStatuses = ['active', 'archived', 'draft'];
        if (!validStatuses.includes(updateData.status)) {
          delete updateData.status;
        }
      }

      if (dbConnected && db) {
        const query = buildIdQuery(id);
        const result = await db.collection('products').findOneAndUpdate(
          query,
          { $set: updateData },
          { returnDocument: 'after' }
        );
        const updatedDoc = result && (result.value || result);
        if (updatedDoc) {
          return res.status(200).json({ success: true, product: updatedDoc, dbConnected: true });
        }
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

  // DELETE: permanent delete product document
  if (req.method === 'DELETE') {
    const id = queryId || req.body?.id;
    if (!id) return res.status(400).json({ success: false, error: 'Product ID required' });

    try {
      if (dbConnected && db) {
        const query = buildIdQuery(id);
        const result = await db.collection('products').deleteOne(query);
        if (result.deletedCount === 0) {
          return res.status(404).json({ success: false, error: 'Product not found', dbConnected });
        }
      }

      return res.status(200).json({
        success: true,
        message: 'Product permanently deleted',
        dbConnected
      });
    } catch (err) {
      console.error('Error permanently deleting product:', err);
      return res.status(500).json({ success: false, error: 'Failed to delete product' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};
