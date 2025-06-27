const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Route to get all hotels
router.get('/hotel', hotelController.getHotels);
router.post('/hotel/create', authMiddleware, hotelController.createHotel);
router.delete('/hotel/delete/:id', authMiddleware, hotelController.deleteHotel);

module.exports = router;