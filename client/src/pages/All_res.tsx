// src/pages/All_res.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Trash2 } from 'lucide-react'; // Added Trash2 icon
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function All_res() {
    const { t } = useTranslation();
    const [cards, setCards] = useState<CardType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null); // Added for success messages

    type CardType = {
        _id: string;
        images: string[];
        title: string;
        description: string;
        location: string;
        workingHours: string;
        price: number;
    };

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/card');
                console.log('API Response:', response.data);
                const data = Array.isArray(response.data) ? response.data : response.data?.data || [];
                if (data.length > 0) {
                    const validCards = data.filter(
                        (card) =>
                            card._id &&
                            card.images &&
                            Array.isArray(card.images) &&
                            card.title &&
                            card.description &&
                            card.location &&
                            card.workingHours &&
                            card.price != null
                    );
                    if (validCards.length === 0) {
                        setError(t('no_valid_cards') || 'No valid restaurant data found.');
                    } else {
                        setCards(validCards);
                        setError(null);
                    }
                } else {
                    setCards([]);
                    setError(t('no_restaurants') || 'No restaurants available.');
                }
            } catch (error: any) {
                console.error('Error fetching cards:', error.message, error.response?.data);
                setError(t('fetch_error') || 'Failed to load restaurants. Please try again.');
            }
        };
        fetchCards();
    }, []);

    const handleDelete = async (cardId: string) => {
        if (!confirm(t('confirm_delete') || 'Are you sure you want to delete this restaurant?')) {
            return;
        }
        try {
            await axios.delete(`http://localhost:5000/api/card/delete/${cardId}`);
            setCards(cards.filter((card) => card._id !== cardId)); // Remove card from state
            setSuccess(t('delete_success') || 'Restaurant deleted successfully.');
            setError(null);
            setTimeout(() => setSuccess(null), 3000); // Clear success message after 3s
        } catch (error: any) {
            const errorMessage =
                error.response?.data?.message || t('delete_error') || 'Failed to delete restaurant.';
            setError(errorMessage);
            console.error('Error deleting card:', error.response?.data);
        }
    };

    return (
        <div className="py-16 px-8">
            <h1 className="text-4xl font-bold text-center mb-4 mt-6">{t('all_restaurants')}</h1>
            <p className="text-center text-gray-600 mb-10">{t('all_restaurants_title')}</p>

            <div className="flex justify-center mb-6">
                <Link to="/add-card">
                    <Button className="w-full max-w-xs">{t('add_new_restaurant')}</Button>
                </Link>
            </div>

            {success && <p className="text-center text-green-500 mb-6">{success}</p>}
            {error && <p className="text-center text-red-500 mb-6">{error}</p>}

            <div className="flex flex-wrap justify-center gap-10">
                {cards.length === 0 ? (
                    <p className="text-center text-gray-600">{t('no_restaurants')}</p>
                ) : (
                    cards.map((card) => (
                        <div
                            key={card._id}
                            className="w-full sm:w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={card.images?.[0] || 'https://via.placeholder.com/350x200'}
                                alt={card.title || 'Restaurant'}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-1">{card.title || 'Untitled'}</h2>
                                <p className="text-sm text-gray-500 mb-3">{card.description || 'No description'}</p>

                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {card.location || 'Unknown location'}
                                </div>

                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {card.workingHours || 'Unknown hours'}
                                </div>

                                <div className="flex items-center text-sm text-gray-600 mb-3">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    ${card.price != null ? card.price.toFixed(2) : 'N/A'}
                                </div>

                                <div className="flex gap-2 mb-0">
                                    <Button variant="default" className="flex-1 cursor-pointer">
                                        {t('visit')}
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="flex-1 cursor-pointer"
                                        onClick={() => handleDelete(card._id)}
                                    >
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        {t('delete')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default All_res;