const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

console.log('Testing MongoDB connection...');
console.log(`Connection string: ${process.env.MONGODB_URI}`);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
    mongoose.connection.close();
    console.log('Connection closed.');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });