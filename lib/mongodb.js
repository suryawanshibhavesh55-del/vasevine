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
  const db = connectedClient.db(dbName);
  return { client: connectedClient, db };
}

module.exports = {
  getClientPromise,
  getDatabase
};