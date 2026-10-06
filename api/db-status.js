const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const uri = process.env.MONGODB_URL || process.env.MONGODB_URI;

  if (!uri) {
    return res.status(200).json({
      connected: false,
      status: 'missing_uri',
      message: 'MONGODB_URI environment variable is not configured in Vercel.',
      instructions: 'Add MONGODB_URI to Vercel Project Settings > Environment Variables.'
    });
  }

  // Mask credentials for display
  const maskedUri = uri.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');

  try {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 4000 });
    await client.connect();
    const db = client.db('vasevine');
    const collections = await db.listCollections().toArray();
    const productCount = await db.collection('products').countDocuments();
    const orderCount = await db.collection('orders').countDocuments();
    await client.close();

    return res.status(200).json({
      connected: true,
      status: 'connected',
      message: 'MongoDB Atlas is successfully connected and operational.',
      uri: maskedUri,
      productCount,
      orderCount,
      collections: collections.map(c => c.name)
    });
  } catch (err) {
    const isAuthError = err.message.includes('Authentication failed') || err.message.includes('bad auth');
    return res.status(200).json({
      connected: false,
      status: isAuthError ? 'auth_failed' : 'connection_error',
      message: err.message,
      uri: maskedUri,
      hint: isAuthError
        ? 'MongoDB Atlas rejected the credentials. Go to MongoDB Atlas > Security > Database Access, and ensure the Database User exists with role readWriteAnyDatabase and the exact password matching your MONGODB_URI in Vercel.'
        : 'Ensure 0.0.0.0/0 is whitelisted under MongoDB Atlas > Security > Network Access.'
    });
  }
};