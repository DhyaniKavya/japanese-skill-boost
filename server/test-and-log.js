const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables
dotenv.config();

// Create a log file
const logFile = path.join(__dirname, 'mongodb-connection.log');
const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
  console.log(message);
};

// Clear previous log
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

log('Testing MongoDB connection...');
log(`Connection string: ${process.env.MONGODB_URI}`);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    log('✅ Successfully connected to MongoDB!');
    log('Database connection is working properly.');
    
    // Close the connection
    return mongoose.connection.close();
  })
  .then(() => {
    log('Connection closed.');
    log('MongoDB connection test completed successfully.');
  })
  .catch(err => {
    log(`❌ MongoDB connection error: ${err.message}`);
    log(JSON.stringify(err, null, 2));
  });