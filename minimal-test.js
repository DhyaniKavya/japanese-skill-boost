const mongoose = require('mongoose');

// MongoDB connection string
const uri = 'mongodb+srv://trae:4MgZnYqgA1nAhykY@cluster0.kbbdski.mongodb.net/japanese_skill_boost?retryWrites=true&w=majority';

console.log('Testing MongoDB connection...');
console.log(`Connection string: ${uri}`);

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
    console.log('Database connection is working properly.');
    mongoose.connection.close();
    console.log('Connection closed.');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:');
    console.error(err);
  });