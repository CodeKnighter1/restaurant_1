import { MdArrowRightAlt } from "react-icons/md";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import card_i1 from "@/images/card_i1.jpg";
import card_i2 from "@/images/card_i2.jpg";
import card_i3 from "@/images/card_i3.jpg";
import card_i4 from "@/images/card_i4.jpg";

const cards = [
  {
    img: card_i1,
    name: "visit_res_one_n",
    text: "visit_res_one_text",
    location: "visit_res_one_l",
    link: "/Res_1",
    button: "visit_res_one_k",
  },
  {
    img: card_i2,
    name: "visit_res_two_n",
    text: "visit_res_two_text",
    location: "visit_res_two_l",
    link: "/res-2",
    button: "visit_res_two_k",
  },
  {
    img: card_i3,
    name: "visit_res_three_n",
    text: "visit_res_three_text",
    location: "visit_res_three_l",
    link: "/res-3",
    button: "visit_res_three_k",
  },
  {
    img: card_i4,
    name: "visit_res_four_n",
    text: "visit_res_four_text",
    location: "visit_res_four_l",
    link: "/res-4",
    button: "visit_res_four_k",
  },
];

function RestaurantCards() {
  const { t } = useTranslation();

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
      <Link to="/all-res">
        <h1 className="flex gap-2 text-xl sm:text-2xl items-center font-semibold mb-4">
          {t("visit_res_all")} <MdArrowRightAlt className="w-5 h-5" />
        </h1>
      </Link>

      <div
        data-aos="fade-right"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-lg hover:scale-[1.02] transition-transform p-4"
          >
            <img
              src={card.img}
              alt={t(card.name)}
              className="w-full h-40 sm:h-48 object-cover rounded"
            />
            <h1 className="text-base sm:text-lg font-semibold mt-2">{t(card.name)}</h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{t(card.text)}</p>

            <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
              {t(card.location)}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
              10:00 - 23:00
            </div>
            <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
              <DollarSign className="w-3 sm:w-4 h-3 sm:h-4" />
              $$ • Italian
            </div>
            <div className="text-xs sm:text-sm text-yellow-500 flex items-center gap-1 mb-3">
              <Star className="w-3 sm:w-4 h-3 sm:h-4" />
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

export default RestaurantCards;