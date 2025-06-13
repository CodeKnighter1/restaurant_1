import { MdArrowRightAlt } from "react-icons/md";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import card_h1 from "@/images/card_h1.jpg";
import card_h2 from "@/images/card_h2.jpg";
import card_h3 from "@/images/card_i3.jpg";
import card_h4 from "@/images/card_i4.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cards = [
  {
    img: card_h1,
    name: "visit_hot_one_n",
    text: "visit_hot_one_text",
    location: "visit_hot_one_l",
    link: "/hotel-1",
    button: "visit_hot_one_k",
    alt: "World Lux Plaza mehmonxonasi rasmi",
  },
  {
    img: card_h2,
    name: "visit_hot_two_n",
    text: "visit_hot_two_text",
    location: "visit_hot_two_l",
    link: "/hotel-2",
    button: "visit_hot_two_k",
    alt: "Hotel Two image",
  },
  {
    img: card_h3,
    name: "visit_hot_three_n",
    text: "visit_hot_three_text",
    location: "visit_hot_three_l",
    link: "/hotel-3",
    button: "visit_hot_three_k",
    alt: "Hotel Three image",
  },
  {
    img: card_h4,
    name: "visit_hot_four_n",
    text: "visit_hot_four_text",
    location: "visit_hot_four_l",
    link: "/hotel-4",
    button: "visit_hot_four_k",
    alt: "Hotel Four image",
  },
];

function HotelCards() {
  const { t } = useTranslation();

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
      <Link to="/all-hotel">
        <h1 className="flex gap-2 text-xl sm:text-2xl items-center font-semibold mb-4 ml-0 sm:ml-10">
          {t("visit_hot_all")} <MdArrowRightAlt className="w-5 h-5" />
        </h1>
      </Link>

      <div
        data-aos="fade-left"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md hover:scale-[1.02] transition-transform p-4 w-full"
          >
            <img
              src={card.img}
              alt={t(card.alt)}
              className="w-full h-40 sm:h-48 object-cover rounded"
            />
            <h1 className="text-base sm:text-lg font-semibold mt-2 text-black">{t(card.name)}</h1>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">{t(card.text)}</p>

            <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              {t(card.location)}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              10:00 - 23:00
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
              <DollarSign className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              $$ • Italian
            </div>
            <div className="flex items-center text-xs sm:text-sm text-yellow-500 mb-3">
              <Star className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              4.5 / 5
            </div>

            <Link to={card.link}>
              <Button
                variant="link"
                className="w-full text-xs sm:text-sm text-blue-600 hover:text-blue-800 p-0 h-8"
              >
                {t(card.button)}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelCards;