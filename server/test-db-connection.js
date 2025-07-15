const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Function to test MongoDB connection
async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log(`Connection string: ${process.env.MONGODB_URI}`);
    
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('✅ Successfully connected to MongoDB!');
    console.log('Database connection is working properly.');
    
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed.');
    
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection error:');
    console.error(error);
    return false;
  }
}

// Run the test
testConnection()
  .then(success => {
    if (success) {
      console.log('\nYour MongoDB connection is configured correctly.');
    } else {
      console.log('\nPlease check your MongoDB connection string in the .env file.');
    }
    process.exit(0);
  })
  .catch(err => {
    console.error('Unexpected error:', err);
    process.exit(1);
  });