import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, DollarSign } from "lucide-react"
import card_i1 from "@/images/card_i1.jpg"

function All_hotel() {
    return (
        <div className='py-16 px-8'>
            <h1 className='text-4xl font-bold text-center mb-4 mt-10'>Barcha Mehmonxonalar</h1>
            <p className='text-center text-gray-600 mb-10'>
                Hududingizdagi eng ajotib mehmonxonalarni toping va ularni baholang.
            </p>

            <div className='flex flex-wrap justify-center gap-10'>
                {/* Restoran 1 */}
                <div className='w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={card_i1} alt="Ember va Embar" className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-1'>Ember va Embar</h2>
                        <p className='text-sm text-gray-500 mb-3'>
                            Modern Italian restaurant with cozy atmosphere.
                        </p>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <MapPin className='w-4 h-4 mr-1' />
                            Toshkent, Shahrisabz ko'chasi, 2
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            10:00 - 23:00
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <DollarSign className='w-4 h-4 mr-1' />
                            $$ • Italian
                        </div>

                        <div className='flex items-center text-sm text-yellow-500 mb-3'>
                            <Star className='w-4 h-4 mr-1' />
                            4.5 / 5
                        </div>

                        <Button variant={"default"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>
                </div>

                {/* Restoran 2 */}
                <div className='w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={card_i1} alt="Sakura Sushi" className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-1'>Sakura Sushi</h2>
                        <p className='text-sm text-gray-500 mb-3'>
                            Authentic Japanese sushi made fresh daily.
                        </p>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <MapPin className='w-4 h-4 mr-1' />
                            Toshkent, Amir Temur ko'chasi, 15
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            11:00 - 22:00
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <DollarSign className='w-4 h-4 mr-1' />
                            $$$ • Japanese
                        </div>

                        <div className='flex items-center text-sm text-yellow-500 mb-3'>
                            <Star className='w-4 h-4 mr-1' />
                            4.7 / 5
                        </div>

                        <Button variant={"default"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>
                </div>

                <div className='w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={card_i1} alt="Sakura Sushi" className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-1'>Sakura Sushi</h2>
                        <p className='text-sm text-gray-500 mb-3'>
                            Authentic Japanese sushi made fresh daily.
                        </p>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <MapPin className='w-4 h-4 mr-1' />
                            Toshkent, Amir Temur ko'chasi, 15
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            11:00 - 22:00
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <DollarSign className='w-4 h-4 mr-1' />
                            $$$ • Japanese
                        </div>

                        <div className='flex items-center text-sm text-yellow-500 mb-3'>
                            <Star className='w-4 h-4 mr-1' />
                            4.7 / 5
                        </div>

                        <Button variant={"default"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>
                </div>

                <div className='w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={card_i1} alt="Sakura Sushi" className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-1'>Sakura Sushi</h2>
                        <p className='text-sm text-gray-500 mb-3'>
                            Authentic Japanese sushi made fresh daily.
                        </p>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <MapPin className='w-4 h-4 mr-1' />
                            Toshkent, Amir Temur ko'chasi, 15
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            11:00 - 22:00
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <DollarSign className='w-4 h-4 mr-1' />
                            $$$ • Japanese
                        </div>

                        <div className='flex items-center text-sm text-yellow-500 mb-3'>
                            <Star className='w-4 h-4 mr-1' />
                            4.7 / 5
                        </div>

                        <Button variant={"default"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>
                </div>

                <div className='w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={card_i1} alt="Sakura Sushi" className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-1'>Sakura Sushi</h2>
                        <p className='text-sm text-gray-500 mb-3'>
                            Authentic Japanese sushi made fresh daily.
                        </p>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <MapPin className='w-4 h-4 mr-1' />
                            Toshkent, Amir Temur ko'chasi, 15
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            11:00 - 22:00
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <DollarSign className='w-4 h-4 mr-1' />
                            $$$ • Japanese
                        </div>

                        <div className='flex items-center text-sm text-yellow-500 mb-3'>
                            <Star className='w-4 h-4 mr-1' />
                            4.7 / 5
                        </div>

                        <Button variant={"default"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>
                </div>

                <div className='w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={card_i1} alt="Sakura Sushi" className='w-full h-48 object-cover' />
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-1'>Sakura Sushi</h2>
                        <p className='text-sm text-gray-500 mb-3'>
                            Authentic Japanese sushi made fresh daily.
                        </p>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <MapPin className='w-4 h-4 mr-1' />
                            Toshkent, Amir Temur ko'chasi, 15
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            11:00 - 22:00
                        </div>

                        <div className='flex items-center text-sm text-gray-600 mb-1'>
                            <DollarSign className='w-4 h-4 mr-1' />
                            $$$ • Japanese
                        </div>

                        <div className='flex items-center text-sm text-yellow-500 mb-3'>
                            <Star className='w-4 h-4 mr-1' />
                            4.7 / 5
                        </div>

                        <Button variant={"default"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>
                </div>

                {/* Qo‘shimcha restoranlar shu yerga qo‘shilsa bo‘ladi */}
            </div>
        </div>
    )
}

export default All_hotel