const { verifyAdmin } = require('../../lib/auth');
const { getDatabase } = require('../../lib/mongodb');

module.exports = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  const url = new URL(req.url, 'http://localhost');
  const queryId = req.query?.id || url.searchParams.get('id');
  const { db } = await getDatabase();

  // GET: list products
  if (req.method === 'GET') {
    try {
      const category = req.query?.category || url.searchParams.get('category');
      const status = req.query?.status || url.searchParams.get('status');

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

      await db.collection('products').insertOne(newProduct);
      return res.status(201).json({ success: true, product: newProduct });
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

      const result = await db.collection('products').findOneAndUpdate(
        { $or: [{ id: id }, { _id: id }] },
        { $set: updateData },
        { returnDocument: 'after' }
      );

      if (!result) return res.status(404).json({ success: false, error: 'Product not found' });
      return res.status(200).json({ success: true, product: result });
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
      const result = await db.collection('products').findOneAndUpdate(
        { $or: [{ id: id }, { _id: id }] },
        { $set: { status: 'archived', updatedAt: new Date() } },
        { returnDocument: 'after' }
      );

      if (!result) return res.status(404).json({ success: false, error: 'Product not found' });
      return res.status(200).json({ success: true, message: 'Product archived successfully' });
    } catch (err) {
      console.error('Error archiving product:', err);
      return res.status(500).json({ success: false, error: 'Failed to archive product' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};