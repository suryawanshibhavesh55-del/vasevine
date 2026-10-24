const { MongoClient } = require('mongodb');

let client;
let clientPromise;

function getClientPromise() {
  const uri = process.env.MONGODB_URL || process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URL / MONGODB_URI environment variable is missing. Please configure it in your Vercel project settings.');
  }

  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { maxPoolSize: 10 });
    global._mongoClientPromise = client.connect();
  }
  return global._mongoClientPromise;
}

async function getDatabase(dbName = 'vasevine') {
  const connectedClient = await getClientPromise();
  // VASEVINE's product catalog and orders are strictly stored in the 'vasevine' database on MongoDB Atlas.
  // We sanitize against empty strings, whitespace, or invalid default overrides like 'test'.
  let targetDb = (dbName || '').trim();
  if (!targetDb || targetDb === 'test') {
    targetDb = (process.env.MONGODB_DB_NAME || '').trim();
    if (!targetDb || targetDb === 'test') {
      targetDb = 'vasevine';
    }
  }
  const db = connectedClient.db(targetDb);
  return { client: connectedClient, db };
}

module.exports = {
  getClientPromise,
  getDatabase
};