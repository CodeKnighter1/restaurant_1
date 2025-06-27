const hotelModel = require('../models/hotel.model');

  class HotelService {
      async getHotels() {
          try {
              return await hotelModel.find({});
          } catch (error) {
              throw new Error('Failed to fetch hotels');
          }
      }

      async createHotel(hotelData) {
          try {
              return await hotelModel.create(hotelData);
          } catch (error) {
              throw new Error('Failed to create hotel');
          }   
      }

      async deleteHotel(id) { // hotelid o'rniga id
          try {
              const deletedHotel = await hotelModel.findByIdAndDelete(id);
              if (!deletedHotel) {
                  throw new Error('Hotel not found');
              }
              return deletedHotel;
          } catch (error) {
              throw new Error('Failed to delete hotel');
          }
      }
  }

  module.exports = new HotelService();