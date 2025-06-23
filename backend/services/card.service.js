// card.service.js
const cardModel = require('../models/card.model');

class CardService {
  async createCard(cardData) {
    try {
      return await cardModel.create(cardData);
    } catch (error) {
      throw new Error('Failed to create card');
    }
  }
  async getAllCards() { // Changed from getCards
    try {
      return await cardModel.find({});
    } catch (error) {
      throw new Error('Failed to fetch cards');
    }
  }

  async deleteCard(cardId) {
    try {
      const deletedCard = await cardModel.findByIdAndDelete(cardId);
      if (!deletedCard) {
        throw new Error('Card not found');
      }
      return deletedCard;
    } catch (error) {
      throw new Error('Failed to delete card');
    }
  }
}

module.exports = new CardService();