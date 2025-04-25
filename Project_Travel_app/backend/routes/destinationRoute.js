const express = require('express');
const Destination = require('../models/Destination');
const router = express.Router();

// Get all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new destination
router.post('/', async (req, res) => {
  const { name, location, description } = req.body;
  const newDestination = new Destination({
    name,
    location,
    description,
  });

  try {
    const destination = await newDestination.save();
    res.status(201).json(destination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
