// src/models/card.model.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  images: [{ type: String, required: true }],
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  workingHours: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 }, // Add rating
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Card', cardSchema);