const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const logFile = path.join(__dirname, 'connection-test-result.txt');

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
writeLog(`Connection string: ${process.env.MONGODB_URI}`);
writeLog('======================');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    writeLog('✅ Successfully connected to MongoDB!');
    writeLog('Database connection is working properly.');
    
    // Close the connection
    return mongoose.connection.close();
  })
  .then(() => {
    writeLog('Connection closed.');
    writeLog('MongoDB connection test completed successfully.');
    process.exit(0);
  })
  .catch(err => {
    writeLog(`❌ MongoDB connection error: ${err.message}`);
    writeLog(JSON.stringify(err, null, 2));
    process.exit(1);
  });