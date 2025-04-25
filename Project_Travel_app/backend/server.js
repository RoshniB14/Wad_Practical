const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/destinations', require('./routes/destinationRoute'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
