import * as React from "react";
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import top_r1 from "@/images/top_r1.jpg";
import top_r2 from "@/images/top_r2.jpg";
import top_r3 from "@/images/top_r3.jpg";
// import { t } from "i18next";


const restaurants = [
    {
        img: top_r1,
        title: "bosf_r",
        text: "bosf_r_text",
        button: "bosf_r_k",
    },
    {
        img: top_r2,
        title: "top_res_two",
        text: "top_res_two_text",
        button: "top_res_two_k",
    },
    {
        img: top_r3,
        title: "top_res_three",
        text: ["top_res_three_text1", "top_res_three_text2"],
        button: "top_res_three_k",
    },
];

function TopRestaurants() {
    const { t } = useTranslation();
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="px-4 sm:px-6">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="h-[80vh] sm:h-[90vh] max-w-full shadow-md mt-10 sm:mt-16">
                    {restaurants.map((restaurant, index) => (
                        <CarouselItem key={index}>
                            <div className="p-2 sm:p-4">
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center h-full">
                                        <div
                                            className={`w-full h-[50vh] sm:h-[80vh] bg-cover bg-center rounded-lg flex flex-col justify-end p-4 sm:p-8 bg-[url(${restaurant.img})]`}
                                            style={{ backgroundImage: `url(${restaurant.img})` }}
                                        >
                                            <h2 className="font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl text-blue-50 mb-2">
                                                {t(restaurant.title)}
                                            </h2>
                                            <p className="text-white text-xs sm:text-sm md:text-base font-sans mb-3">
                                                {Array.isArray(restaurant.text)
                                                    ? restaurant.text.map((text, i) => (
                                                        <span key={i}>
                                                            {t(text)}
                                                            {i < restaurant.text.length - 1 && <br />}
                                                        </span>
                                                    ))
                                                    : t(restaurant.text)}
                                            </p>
                                            <Button
                                                variant="default"
                                                className="w-32 sm:w-40 h-8 sm:h-10 text-xs sm:text-sm cursor-pointer"
                                            >
                                                {t(restaurant.button)}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default TopRestaurants;