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
  origin: function(origin, callback) {
    const allowedOrigins = [
      'http://localhost:8080', 
      'http://localhost:8081', 
      'http://localhost:8082', 
      'http://localhost:3000',
      'https://japanese-skill-boost.vercel.app',
      'https://japanese-skill-boost-git-main.vercel.app'
    ];
    // Allow requests with no origin (like mobile apps)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  maxAge: 86400 // Cache preflight request for 24 hours
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...');
console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
    console.log('Database connection is working properly.');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:');
    console.error(err);
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