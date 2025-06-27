import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { Button } from '@/components/ui/button';
  import { MapPin, Clock, DollarSign } from 'lucide-react';
  import axios from 'axios';
  import { useTranslation } from 'react-i18next';

  const CardForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
      images: [''],
      title: '',
      description: '',
      location: '',
      workingHours: '',
      price: '',
      rating: '', // Add rating
    });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Get token from localStorage

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newImages = [...formData.images];
      newImages[index] = e.target.value;
      setFormData({ ...formData, images: newImages });
    };

    const addImageField = () => {
      setFormData({ ...formData, images: [...formData.images, ''] });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const payload = {
        ...formData,
        images: formData.images.filter((url) => url.trim() !== ''),
        price: parseFloat(formData.price) || 0,
        rating: parseFloat(formData.rating) || undefined, // Convert to number or undefined
      };
      console.log('Submitting payload:', payload);
      try {
        await axios.post('http://localhost:5000/api/card/create', payload, {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        });
        navigate('/all-res');
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.error?.join(', ') ||
          error.response?.data?.message ||
          'Failed to create card';
        setError(errorMessage);
        console.error('Error creating card:', error.response?.data);
      }
    };

    return (
      <div className="py-16 px-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">{t('add_restaurant')}</h1>
        <p className="text-center text-gray-600 mb-10">{t('add_restaurant_description')}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-lg">
          {formData.images.map((image, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">{t('image_url')} {index + 1}</label>
              <input
                type="url"
                value={image}
                onChange={(e) => handleImageChange(e, index)}
                className="mt-1 p-2 border rounded-md"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addImageField} className="w-full">
            {t('add_another_image')}
          </Button>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">{t('title')}</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">{t('description')}</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md"
              rows={4}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> {t('location')}
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {t('working_hours')}
            </label>
            <input
              type="text"
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <DollarSign className="w-4 h-4 mr-1" /> {t('price')}
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">{t('rating')}</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md"
              min="0"
              max="5"
              step="0.1"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full">
            {t('create_restaurant')}
          </Button>
        </form>
      </div>
    );
  };

  export default CardForm;