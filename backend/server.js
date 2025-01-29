const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const siteVisitRoutes = require('./Routes/siteVisitRoute');
const EstimateFormRoute = require('./Routes/EstimateFormRoute');

// Initialize dotenv
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow React app to access the backend
app.use(express.json()); // Parse JSON bodies

// MongoDB URI from .env file
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err.message));

// Test route
app.get('/', (req, res) => res.send('Welcome to the Painter Shop API!'));

// Site Visit routes
app.use('/api/site-visits', siteVisitRoutes);

// Estimate Route 
app.use("/api/forms", EstimateFormRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
