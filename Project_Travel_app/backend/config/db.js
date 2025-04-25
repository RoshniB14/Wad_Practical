const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:1234admin@cluster0.1lqu9.mongodb.net/travelDB?retryWrites=true&w=majority');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;

