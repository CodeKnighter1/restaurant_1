import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import $api from '../http/api';

function AdminPanel() {
  const { t } = useTranslation();
  const [restaurants, setRestaurants] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resResponse, hotelResponse] = await Promise.all([
          $api.get('/card', { headers: { Authorization: `Bearer ${token}` } }),
          $api.get('/hotel', { headers: { Authorization: `Bearer ${token}` } }),
        ]);
        setRestaurants(resResponse.data);
        setHotels(hotelResponse.data);
      } catch (error: any) {
        setError(t('fetch_error') || 'Failed to load data.');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-6">{t('admin_dashboard')}</h1>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{t('manage_restaurants')}</h2>
        <Link to="/add-card">
          <Button className="mb-4">{t('add_new_restaurant')}</Button>
        </Link>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((res: any) => (
            <div key={res._id} className="p-4 bg-white rounded-lg shadow">
              <h3>{res.title}</h3>
              <p>{res.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t('manage_hotels')}</h2>
        <Link to="/add-hotel">
          <Button className="mb-4">{t('add_new_hotel')}</Button>
        </Link>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel: any) => (
            <div key={hotel._id} className="p-4 bg-white rounded-lg shadow">
              <h3>{hotel.title}</h3>
              <p>{hotel.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;