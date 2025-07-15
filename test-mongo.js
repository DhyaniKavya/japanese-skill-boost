const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// MongoDB connection string
const uri = 'mongodb+srv://trae:4MgZnYqgA1nAhykY@cluster0.kbbdski.mongodb.net/japanese_skill_boost?retryWrites=true&w=majority';

// Log file path
const logFile = path.join(__dirname, 'mongo-test-result.txt');

// Clear previous log
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

// Write to log file
const writeLog = (message) => {
  fs.appendFileSync(logFile, message + '\n');
  console.log(message);
};

writeLog('MongoDB Connection Test');
writeLog('======================');
writeLog(`Timestamp: ${new Date().toISOString()}`);
writeLog(`Connection string: ${uri}`);
writeLog('======================');

mongoose.connect(uri)
  .then(() => {
    writeLog('✅ Successfully connected to MongoDB!');
    writeLog('Database connection is working properly.');
    
    // Create a simple test model
    const TestSchema = new mongoose.Schema({
      name: String,
      date: { type: Date, default: Date.now }
    });
    
    const Test = mongoose.model('Test', TestSchema);
    
    // Create a test document
    return Test.create({ name: 'Connection Test' });
  })
  .then(doc => {
    writeLog(`Test document created with ID: ${doc._id}`);
    
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