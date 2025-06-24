const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    images: [{ type: String, required: true }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    workingHours: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 }, // Add rating
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hotel', hotelSchema);

// This model defines the structure of a hotel document in MongoDB.
// It includes fields for images, title, description, location, working hours, price, rating, and created date.
// The rating field is constrained to be between 0 and 5, with a default value of 0.