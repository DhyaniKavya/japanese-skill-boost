const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// MongoDB connection string
const uri = 'mongodb+srv://trae:4MgZnYqgA1nAhykY@cluster0.kbbdski.mongodb.net/japanese_skill_boost?retryWrites=true&w=majority';

// Log file path - using a fixed path to ensure we can find it
const logFile = 'C:/Users/Lenovo/OneDrive/Desktop/trae/japanese-skill-boost/mongo-result.txt';

// Clear previous log
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

// Write to log file
const writeLog = (message) => {
  fs.appendFileSync(logFile, message + '\n');
};

writeLog('MongoDB Connection Test');
writeLog('======================');
writeLog(`Timestamp: ${new Date().toISOString()}`);
writeLog(`Connection string: ${uri}`);
writeLog('======================');

try {
  writeLog('Attempting to connect to MongoDB...');
  
  mongoose.connect(uri)
    .then(() => {
      writeLog('✅ Successfully connected to MongoDB!');
      writeLog('Database connection is working properly.');
      
      // Close the connection
      return mongoose.connection.close();
    })
    .then(() => {
      writeLog('Connection closed.');
      writeLog('MongoDB connection test completed successfully.');
    })
    .catch(err => {
      writeLog(`❌ MongoDB connection error: ${err.message}`);
      writeLog(JSON.stringify(err, null, 2));
    });
} catch (error) {
  writeLog(`Unexpected error: ${error.message}`);
  writeLog(JSON.stringify(error, null, 2));
}

// Keep the process running for a bit to allow async operations to complete
setTimeout(() => {
  writeLog('Test script execution completed.');
}, 5000);