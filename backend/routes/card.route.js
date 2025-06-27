const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/card', cardController.getCards);
router.post('/card/create', authMiddleware, cardController.createCard);
router.delete('/card/delete/:id', authMiddleware, cardController.deleteCard);

module.exports = router;