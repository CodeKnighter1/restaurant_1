import { MdArrowRightAlt } from "react-icons/md";
import { Star, MapPin, Clock, DollarSign } from "lucide-react"
import card_i1 from "@/images/card_i1.jpg";
import card_i2 from "@/images/card_i2.jpg";
import card_i3 from "@/images/card_i3.jpg";
import card_i4 from "@/images/card_i4.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


function restaurant_cards() {
    return (
        <div>
            <div className="">
                <Link to={"/all-res"}>
                    <h1 className="flex gap-[6px] text-[28px] items-center ml-[40px]">Restoranlarga tashrif buyurish <MdArrowRightAlt /> </h1>
                </Link>

                <div data-aos="fade-right" className="flex gap-[14px] mt-[20px] px-[50px]">

                    <div className="bg-gray-300 w-full sm:w-[345px] px-[14px] py-[12px] rounded-sm shadow-md  hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_i1} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">Ember & Embar</h1>
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
                        <Link to={"/Res_1"}>
                            <Button variant={"outline"} className='w-full cursor-pointer'>
                                Tashrif buyurish
                            </Button>
                        </Link>
                    </div>
                    <div className="bg-gray-300 w-full sm:w-[345px] px-[14px] py-[12px] rounded-sm shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_i2} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">Restoran 12</h1>
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

                    <div className="bg-gray-300 w-full sm:w-[345px] px-[14px] py-[12px] rounded-sm shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_i3} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">Go'shtli biftek uyi</h1>
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

                    <div className="bg-gray-300 w-full sm:w-[345px] px-[14px] py-[12px] rounded-sm shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <img className="w-[320px] rounded-sm" src={card_i4} alt="" />
                        <h1 className="text-[22px] mt-[6px] text-black">"Affresco" restorani</h1>
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

export default restaurant_cards