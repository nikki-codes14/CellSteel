// server.js
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4'; // Update with your MongoDB connection URL
const dbName = 'celliron'; // Update with your MongoDB database name
const collectionName = 'coupons'; // Update with your MongoDB collection name

// Connect to MongoDB
let db;
MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB', err));

// Define API endpoint to fetch collection records
app.get('/collections/coupons_report', async (req, res) => {
  try {
    const collection = db.collection(collectionName);
    const records = await collection.find().toArray();
    res.json(records);
  } catch (err) {
    console.error('Error fetching records', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
