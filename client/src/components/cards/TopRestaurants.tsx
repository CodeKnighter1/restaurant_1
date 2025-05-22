import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

function TopRestaurants() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (

        <div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[plugin.current]}
                className=""
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="h-auto sm:h-[100vh] max-w-full shadow-md mt-[70px]">
                    <CarouselItem>
                        <div className="">
                            <Card>
                                <CardContent className="flex aspect-square justify-center shadow-md">
                                    <div className="bg-[url(@/images/top_r1.jpg)] w-full sm:w-[1300px] h-[300px] sm:h-[600px] bg-cover rounded-lg flex flex-col justify-center px-24 bg-no-repeat">
                                        <h2 className="font-mono text-[34px] text-blue-50 mt-[300px]"><span className="text-white">Bosphor </span> restorani</h2>
                                        <p className="text-white text-[20px] font-sans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Magnam aliquam repellat maiores sequi expedition.
                                        </p>
                                        <Button variant={"default"} className="w-[140px] cursor-pointer">Tashrif buyurish</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="">
                            <Card>
                                <CardContent className="flex aspect-square justify-center">
                                    <div className="bg-[url(@/images/top_r2.jpg)] w-full sm:w-[1300px] h-[300px] sm:h-[600px] rounded-lg flex flex-col justify-center px-24">
                                        <h2 className="font-mono text-[34px] text-blue-50 mt-[300px]"><span className="text-white">PRO.Xinkali</span> premium <br /> restorani </h2>
                                        <p className="text-white text-[20px] font-sans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Magnam aliquam repellat maiores sequi expedition.
                                        </p>
                                        <Button variant={"default"} className="w-[140px] cursor-pointer">Tashrif buyurish</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square justify-center">
                                    <div className="bg-[url(@/images/top_r3.jpg)] w-full sm:w-[1300px] h-[300px] sm:h-[600px] rounded-lg flex flex-col justify-center px-24">
                                        <h2 className="font-mono text-[34px] text-blue-50 mt-[300px]"><span className="text-white">Fileto</span> restorani </h2>
                                        <p className="text-white text-[20px] font-sans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                                            Magnam aliquam repellat maiores sequi expedition.
                                        </p>
                                        <Button variant={"default"} className="w-[140px] cursor-pointer">Tashrif buyurish</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default TopRestaurants