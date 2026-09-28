const { verifyAdmin } = require('../../lib/auth');
const { getDatabase } = require('../../lib/mongodb');

module.exports = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin session required' });
  }

  try {
    const { db } = await getDatabase();

    const totalOrders = await db.collection('orders').countDocuments();
    const pendingOrders = await db.collection('orders').countDocuments({
      orderStatus: { $in: ['Order Placed', 'Order Confirmed', 'Processing'] }
    });
    const shippedOrders = await db.collection('orders').countDocuments({ orderStatus: 'Shipped' });
    const deliveredOrders = await db.collection('orders').countDocuments({ orderStatus: 'Delivered' });

    const totalProducts = await db.collection('products').countDocuments({ status: { $ne: 'archived' } });
    const lowStockProducts = await db.collection('products').countDocuments({
      status: { $ne: 'archived' },
      stock: { $lte: 5, $gt: 0 }
    });

    // Sum sales
    const salesAggregation = await db.collection('orders').aggregate([
      { $group: { _id: null, totalSales: { $sum: '$total' } } }
    ]).toArray();
    const totalSales = salesAggregation.length > 0 ? salesAggregation[0].totalSales : 0;

    return res.status(200).json({
      success: true,
      stats: {
        totalOrders,
        pendingOrders,
        shippedOrders,
        deliveredOrders,
        totalProducts,
        lowStockProducts,
        totalSales
      }
    });
  } catch (err) {
    console.error('Admin stats error:', err);
    return res.status(500).json({ success: false, error: 'Failed to aggregate statistics' });
  }
};