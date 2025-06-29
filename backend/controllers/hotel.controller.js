const { z } = require('zod');
  const hotelService = require('../services/hotel.service');

  const HotelSchema = z.object({
      images: z.array(z.string().url()).min(1, 'At least one image is required'),
      title: z.string().min(1),
      description: z.string().min(1),
      location: z.string().min(1),
      workingHours: z.string().min(1),
      price: z.number().positive(),
      rating: z.number().min(0).max(5).optional(),
  });

  class HotelController {
      async getHotels(req, res) {
          try {
              const hotels = await hotelService.getHotels();
              res.status(200).json(hotels);
          } catch (error) {
              console.error('Error fetching hotels:', error);
              res.status(500).json({ message: 'Internal Server Error' });
          }
      }

      async createHotel(req, res) {
          try {
              const hotelData = HotelSchema.parse(req.body);
              const newHotel = await hotelService.createHotel(hotelData);
              res.status(201).json({ message: 'Hotel created successfully', hotel: newHotel });
          } catch (error) {
              console.error('Error creating hotel:', error);
              res.status(400).json({ message: error.errors ? error.errors.join(', ') : 'Invalid hotel data' });
          }
      }

      async deleteHotel(req, res) {
          const { id } = req.params;
          try {
              const deletedHotel = await hotelService.deleteHotel(id); // id o'rniga hotelid ishlatilgan edi
              if (!deletedHotel) {
                  return res.status(404).json({ message: 'Hotel not found' });
              }
              res.status(200).json({ message: 'Hotel deleted successfully', hotel: deletedHotel });
          } catch (error) {
              console.error('Error deleting hotel:', error);
              res.status(500).json({ message: 'Internal Server Error', error });
          }
      }
  }

  module.exports = new HotelController();