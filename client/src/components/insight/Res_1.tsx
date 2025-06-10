import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import card_e from "@/images/card_i1.jpg"
import MapModal from "../shared/MapModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLeafOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function RestaurantDetail() {
    const [isMapOpen, setIsMapOpen] = useState(false);
    return (
        <div className="max-w-5xl mx-auto py-10 px-2">
            {/* Hero section */}
            <div className="rounded-3xl overflow-hidden shadow-md mb-8 mt-10">
                <img
                    src={card_e}
                    alt="Restaurant Hero"
                    className="w-full h-64 object-cover"
                />
            </div>

            {/* Title and rating */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Ember va Embar</h1>
                    <div className="flex items-center text-yellow-500">
                        <Star className="w-5 h-5" />
                        <span className="ml-2 text-lg font-medium">4.6 / 5</span>
                    </div>
                </div>
                <div className="flex gap-3 mb-8 md:mb-0">
                    <Link to={"/menu/1"}>
                        <Button variant="default" className="flex items-center gap-2">
                            Menyuga tashrif buyurish <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
            {/* Daily shift */}

            <div>
                <h2 className="flex items-center text-2xl font-semibold mb-4"><Clock className="w-5 h-5 mr-2" /> Ish vaqti</h2>
                <div className="px-6 mb-8 w-full max-w-[800px] mx-auto">
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Dushanba</h3>
                        <p className="text-sm text-gray-600">08:00 - 11:00</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Seshanba</h3>
                        <p className="text-sm text-gray-600">08:00 - 11:00</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Chorshanba</h3>
                        <p className="text-sm text-gray-600">08:00 - 11:00</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Payshanba</h3>
                        <p className="text-sm text-gray-600">08:00 - 11:00</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Juma</h3>
                        <p className="text-sm text-gray-600">08:00 - 11:00</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Shanba</h3>
                        <p className="text-sm text-gray-600">08:00 - 11:00</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-2">
                        <h3 className="text-lg font-semibold">Yakshanba</h3>
                        <p className="text-sm text-gray-600">08:00 - 12:00</p>
                    </div>

                </div>
            </div>

            {/* Info section */}
            <div className="flex justify-between mb-8">
                <div>
                    <h1 className="text-gray-600 text-lg italic mb-4">Joylashuv</h1>
                    <div className="flex items-center text-gray-600 cursor-pointer" onClick={() => setIsMapOpen(true)}>
                        <MapPin className="w-5 h-5 mr-2" />
                        Toshkent, Shahrisabz ko'chasi, 2
                    </div>
                    <MapModal open={isMapOpen} onClose={() => setIsMapOpen(false)} />
                    <h2 className="flex gap-2 italic text-gray-600 mt-3 cursor-pointer"><FaPhoneAlt /> +998555044441</h2>
                </div>
                <div>
                    <h1 className="text-gray-600 text-lg italic mb-4">Xususiyatlari</h1>
                    <p className="flex items-center gap-1 text-gray-600 text-lg italic mb-1">
                        <GoCheck />
                        Zamonaviy italiyan taomlari, qulay va hashamatli ichki makon.
                    </p>
                    <p className="flex items-center gap-1 text-gray-600 text-lg italic mb-1">
                        <IoLeafOutline />
                        Vegetarianlar uchun mos, Glutensiz variantlar mavjud.
                    </p>

                    <p className="flex items-center gap-1 text-gray-600 text-lg italic mb-1">
                        <BsCreditCard />
                        Kredit kartalarini qabul qiladi: American Express, Mastercard, Visa
                    </p>
                </div>


            </div>

            {/* Reviews section */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Mijozlar fikri</h2>
                <div className="space-y-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <p className="text-sm text-gray-700 mb-2">
                            "Ovqatlar juda mazali, xizmat ham a'lo darajada. Albatta yana kelaman!"
                        </p>
                        <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl">
                        <p className="text-sm text-gray-700 mb-2">
                            "Ovqatlar juda mazali, xizmat ham a'lo darajada. Albatta yana kelaman!"
                        </p>
                        <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl">
                        <p className="text-sm text-gray-700 mb-2">
                            "Ovqatlar juda mazali, xizmat ham a'lo darajada. Albatta yana kelaman!"
                        </p>
                        <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" /> <Star className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery section */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-6">Foto lavhalar</h2>
                <div className="flex lg:flex-row gap-10">
                    {/* Asosiy carousel */}
                    <div className="w-full lg:w-3/4">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <Card className="overflow-hidden rounded-xl">
                                            <CardContent className="p-0">
                                                <img
                                                    src={card_e}
                                                    alt={`Image ${index + 1}`}
                                                    className="w-full h-[380px] sm:h-[430px] md:h-[480px] object-cover rounded-xl"
                                                />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    {/* Thumbnail rasmlar */}
                    <div>
                        <div className="bg-[url(@/images/e_one.jpg)] flex items-end p-1 w-[200px] h-[164px] bg-cover rounded-lg mb-4">
                            <h2 className="text-white italic text-2xl">Ichki</h2>
                        </div>

                        <div className="bg-[url(@/images/e_two.jpg)] flex items-end p-1 w-[200px] h-[164px] bg-cover rounded-lg mb-4">
                            <h2 className="text-white italic text-2xl">Taomlar</h2>
                        </div>

                        <div className="bg-[url(@/images/e_three.jpg)] flex items-end p-1 w-[200px] h-[164px] bg-cover rounded-lg mb-4">
                            <h2 className="text-white italic text-2xl">Ichimliklar</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* {Data section} */}
            <div>
                <h2 className="iconic text-3xl">Ma'lumotlar</h2>
                <p className="mt-2 text-[18px] mono">InterContinental Tashkentning 17-qavatida joylashgan Ember shunchaki restoran emas. Bu sizni orzuga o'xshash holatga olib boradigan ajoyib shahar manzaralari bilan to'ldirilgan ovqatlanish san'atiga bo'lgan yuksak hurmatdir. Menyuda nozik sushi va sashimidan tortib, ta'mingizni hayratda qoldiradigan osiyo taomlarigacha bo'lgan oshxona lazzatlarining ajoyib kombinatsiyasi mavjud. Ko'mir bilan o'pilgan, quruq keksa bifshtekslar shunchaki chidab bo'lmas va Karaage va Rok qisqichbaqalari bizning sevimlilarimiz qatoriga kiradi. Barda sinchkovlik bilan tayyorlangan kokteyllar xizmat qiladi va shaxsiy ovqat xonasi eksklyuzivlik va qulaylikni ta'minlaydi.</p>
            </div>
        </div>

    );
}