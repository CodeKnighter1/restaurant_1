// src/controllers/card.controller.js
const { z } = require('zod');
const cardService = require('../services/card.service');

const CardSchema = z.object({
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
  title: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  workingHours: z.string().min(1),
  price: z.number().positive(),
  rating: z.number().min(0).max(5).optional(), // Add rating validation
});

class CardController {
  async createCard(req, res) {
    try {
      const data = CardSchema.parse(req.body);
      const newCard = await cardService.createCard(data);
      res.status(201).json({ message: 'Card created', card: newCard });
    } catch (error) {
      res.status(400).json({ error: error.errors || error.message });
    }
  }

  async getCards(req, res) {
    try {
      const cards = await cardService.getAllCards();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching cards', error });
    }
  }

  async deleteCard(req, res) {
    const { id } = req.params;
    try {
      const deletedCard = await cardService.deleteCard(id);
      if (!deletedCard) {
        return res.status(404).json({ message: 'Card not found' });
      }
      res.status(200).json({ message: 'Card deleted successfully', card: deletedCard });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting card', error });
    }
  }
}

module.exports = new CardController();