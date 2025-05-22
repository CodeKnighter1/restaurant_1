import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { MapIcon } from "lucide-react";
import MapModal from "./MapModal";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";


function Navbar() {
    const [isMapOpen, setIsMapOpen] = useState(false);
    return (
        <div>
            <header className="flex justify-between items-center fixed w-full p-4 shadow-md top-0 z-50 bg-system bg-opacity-90 backdrop-blur-md">
                <div className="">
                    <Link to={"/"}>
                        <h1 className="font-serif text-[25px]">EatUzbekistan.uz</h1>
                    </Link>

                </div>

                <ul className="flex gap-10">
                    <li>
                        <Link to="/" className="hover:underline underline-offset-4">Home</Link>
                    </li>
                    <li>
                        <Link to="/top" className="hover:underline underline-offset-4">Top Restaurants</Link>
                    </li>
                    <li className="hover:underline underline-offset-4 cursor-pointer">
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex gap-[10px] items-center">
                    <div className="relative">
                        <Input placeholder="Search" className="w-[250px] pl-10" />
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                    <ModeToggle />
                    <Button variant={"ghost"} className="cursor-pointer" aria-label="Savatcha">
                        <LuShoppingCart className="text-[20px]" />
                    </Button>
                    <Button className="cursor-pointer" variant="outline" onClick={() => setIsMapOpen(true)}>
                        <MapIcon className="w-4 h-4 mr-2" />
                        Xaritani ko‘rish
                    </Button>
                    <MapModal open={isMapOpen} onClose={() => setIsMapOpen(false)} />
                    <Link to={'/auth'}>
                        <Button variant={"ghost"} className='cursor-pointer'>
                            Login
                        </Button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar