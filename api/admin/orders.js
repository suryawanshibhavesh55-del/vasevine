const { verifyAdmin } = require('../../lib/auth');
const { getDatabase } = require('../../lib/mongodb');

const VALID_STATUSES = [
  'Order Placed',
  'Order Confirmed',
  'Processing',
  'Shipped',
  'Out for Delivery',
  'Delivered',
  'Cancelled'
];

module.exports = async (req, res) => {
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
    console.warn('MongoDB admin orders connection warning:', err.message);
  }

  // UPDATE ORDER STATUS (PATCH, PUT, or POST with action/id)
  if (req.method === 'PATCH' || req.method === 'PUT' || (req.method === 'POST' && queryId)) {
    const { status, note } = req.body || {};
    const id = queryId || req.body?.orderId;

    if (!id || !status) {
      return res.status(400).json({ success: false, error: 'Order ID and status are required' });
    }

    if (!VALID_STATUSES.includes(status)) {
      return res.status(400).json({
        success: false,
        error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`
      });
    }

    if (!dbConnected || !db) {
      return res.status(503).json({
        success: false,
        error: `Database offline: ${dbError || 'Authentication failed'}. Order status could not be updated in MongoDB.`
      });
    }

    try {
      const now = new Date();
      const historyEntry = {
        status,
        timestamp: now.toISOString(),
        note: note || `Status updated to ${status} by admin`
      };

      const result = await db.collection('orders').findOneAndUpdate(
        { $or: [{ orderId: id }, { orderId: id.toUpperCase() }] },
        {
          $set: {
            orderStatus: status,
            updatedAt: now
          },
          $push: {
            statusHistory: historyEntry
          }
        },
        { returnDocument: 'after' }
      );

      if (!result) {
        return res.status(404).json({ success: false, error: 'Order not found' });
      }

      return res.status(200).json({
        success: true,
        message: `Order status successfully updated to ${status}`,
        order: result,
        dbConnected: true
      });
    } catch (err) {
      console.error('Error updating order status:', err);
      return res.status(500).json({ success: false, error: 'Failed to update order status' });
    }
  }

  // LIST ORDERS (GET)
  if (req.method === 'GET') {
    try {
      if (!dbConnected || !db) {
        return res.status(200).json({
          success: true,
          count: 0,
          orders: [],
          dbConnected: false,
          dbError: dbError || 'MongoDB disconnected'
        });
      }

      const status = req.query?.status || url.searchParams.get('status');
      const search = req.query?.search || url.searchParams.get('search');

      const query = {};
      if (status && status !== 'all') {
        query.orderStatus = status;
      }
      if (search) {
        query.$or = [
          { orderId: { $regex: search, $options: 'i' } },
          { 'customer.name': { $regex: search, $options: 'i' } },
          { 'customer.mobile': { $regex: search, $options: 'i' } }
        ];
      }

      const orders = await db.collection('orders')
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json({
        success: true,
        count: orders.length,
        orders,
        dbConnected: true
      });
    } catch (err) {
      console.error('Error fetching admin orders:', err);
      return res.status(200).json({
        success: true,
        count: 0,
        orders: [],
        dbConnected: false,
        error: err.message
      });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};