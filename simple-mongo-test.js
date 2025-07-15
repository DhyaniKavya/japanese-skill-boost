const mongoose = require('mongoose');

// MongoDB connection string
const uri = 'mongodb+srv://trae:4MgZnYqgA1nAhykY@cluster0.kbbdski.mongodb.net/japanese_skill_boost?retryWrites=true&w=majority';

console.log('Testing MongoDB connection...');

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });