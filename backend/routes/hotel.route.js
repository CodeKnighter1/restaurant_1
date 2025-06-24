const express = require('express');
const router = express.Router();
const cardController = require('../controllers/hotel.controller');

// Route to get all hotels
router.get('/hotel', cardController.getHotels);
router.post('/hotel/create', cardController.createHotel);
router.delete('/hotel/delete/:id', cardController.deleteHotel);

module.exports = router;