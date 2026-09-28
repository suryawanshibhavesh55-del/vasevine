const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  console.warn('âš ï¸ MONGODB_URI is not defined in environment variables. Database operations will fail gracefully.');
} else {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, { maxPoolSize: 10 });
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In serverless production environments, reuse global promise when container is warm
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, { maxPoolSize: 10 });
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  }
}

async function getDatabase(dbName = 'vasevine') {
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is missing. Please configure it in your Vercel project settings.');
  }
  const connectedClient = await clientPromise;
  const db = connectedClient.db(dbName);
  return { client: connectedClient, db };
}

module.exports = {
  clientPromise,
  getDatabase
};