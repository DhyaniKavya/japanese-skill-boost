const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Initialize Express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:8080',
    'http://localhost:8081',
    'http://localhost:8082',
    'http://localhost:8083',
    'http://localhost:5000',
    'https://japanese-skill-boost.vercel.app',
    'https://japanese-skill-boost-server.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  maxAge: 86400, // Cache preflight request for 24 hours
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...');
console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
    console.log('Database connection is working properly.');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:');
    console.error(err);
    process.exit(1); // Exit if unable to connect to database
  });

// Handle MongoDB connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected. Attempting to reconnect...');
});

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected successfully!');
});

// Import routes
const applicationRoutes = require('./routes/applications');

// Use routes
app.use('/api/applications', applicationRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Japanese Skill Boost API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});