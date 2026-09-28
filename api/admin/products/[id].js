const { verifyAdmin } = require('../../../lib/auth');
const { getDatabase } = require('../../../lib/mongodb');

module.exports = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  const { id } = req.query;
  const { db } = await getDatabase();

  if (req.method === 'PUT') {
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

  if (req.method === 'DELETE') {
    try {
      // Soft-delete: mark status as archived
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