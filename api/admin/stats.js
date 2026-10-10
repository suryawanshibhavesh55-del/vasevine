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

  try {
    let db = null;
    let dbConnected = false;
    try {
      const dbRes = await getDatabase();
      db = dbRes.db;
      dbConnected = true;
    } catch (dbErr) {
      console.warn('MongoDB admin stats connection warning:', dbErr.message);
    }

    if (dbConnected && db) {
      try {
        const totalOrders = await db.collection('orders').countDocuments();
        const pendingOrders = await db.collection('orders').countDocuments({
          orderStatus: { $in: ['Order Placed', 'Order Confirmed', 'Processing'] }
        });
        const shippedOrders = await db.collection('orders').countDocuments({ orderStatus: 'Shipped' });
        const deliveredOrders = await db.collection('orders').countDocuments({ orderStatus: 'Delivered' });

        let totalProducts = await db.collection('products').countDocuments({ status: { $ne: 'archived' } });
        if (totalProducts === 0 && PRODUCTS && PRODUCTS.length > 0) {
          totalProducts = PRODUCTS.length;
        }

        const lowStockProducts = await db.collection('products').countDocuments({
          status: { $ne: 'archived' },
          stock: { $lte: 5, $gt: 0 }
        });

        const salesAggregation = await db.collection('orders').aggregate([
          { $group: { _id: null, totalSales: { $sum: '$total' } } }
        ]).toArray();
        const totalSales = salesAggregation.length > 0 ? salesAggregation[0].totalSales : 0;

        return res.status(200).json({
          success: true,
          dbConnected: true,
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
      } catch (calcErr) {
        console.warn('MongoDB aggregation warning in stats:', calcErr.message);
      }
    }

    // Fallback metrics when MongoDB is offline
    const totalProducts = (PRODUCTS || []).length;
    return res.status(200).json({
      success: true,
      dbConnected: false,
      stats: {
        totalOrders: 0,
        pendingOrders: 0,
        shippedOrders: 0,
        deliveredOrders: 0,
        totalProducts,
        lowStockProducts: 0,
        totalSales: 0
      }
    });
  } catch (err) {
    console.error('Admin stats error:', err);
    return res.status(200).json({
      success: true,
      dbConnected: false,
      stats: {
        totalOrders: 0,
        pendingOrders: 0,
        shippedOrders: 0,
        deliveredOrders: 0,
        totalProducts: (PRODUCTS || []).length,
        lowStockProducts: 0,
        totalSales: 0
      }
    });
  }
};