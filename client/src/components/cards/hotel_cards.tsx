import { MdArrowRightAlt } from "react-icons/md";
import { Star, MapPin, Clock, DollarSign } from "lucide-react"
import card_h1 from "@/images/card_h1.jpg";
import card_h2 from "@/images/card_h2.jpg";
import card_h3 from "@/images/card_i3.jpg";
import card_h4 from "@/images/card_i4.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function hotel_cards() {
    return (
        <div>
            <div className="mt-[60px] mb-[50px] py-[20px]">
                <Link to={"/all-hotel"}>
                    <h1 className="flex gap-[6px] text-[28px] items-center ml-[40px]">Mehmonxonalarga tashrif buyurish <MdArrowRightAlt /> </h1>
                </Link>

                <div data-aos="fade-left" className="flex gap-[14px] mt-[20px] px-[50px]">
                    <div className="bg-gray-300 w-[345px] px-[14px] py-[12px] rounded-sm hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_h1} alt="World Lux Plaza mehmonxonasi rasmi" />
                        <h1 className="text-[22px] mt-[6px] text-black">World Lux ​​Plaza</h1>
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

                        <Button variant={"outline"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>

                    <div className="bg-gray-300 w-[345px] px-[14px] py-[12px] rounded-sm hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_h2} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">Praga mehmonxonasi</h1>
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

                        <Button variant={"outline"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>

                    <div className="bg-gray-300 w-[345px] px-[14px] py-[12px] rounded-sm hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_h3} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">Lotte City Hotel Tashkent Palace</h1>
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

                        <Button variant={"outline"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>

                    <div className="bg-gray-300 w-[345px] px-[14px] py-[12px] rounded-sm hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_h4} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">Radisson Blu mehmonxonasi</h1>
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

                        <Button variant={"outline"} className='w-full cursor-pointer'>
                            Tashrif buyurish
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default hotel_cards