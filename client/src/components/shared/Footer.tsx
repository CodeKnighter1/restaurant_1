import insta_i from '@/images/insta_i.png'
import { FaTelegram } from 'react-icons/fa'
import face_i from '@/images/face_i.png'
import you_tube from '@/images/you_tube.png'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-100 text-gray-800 px-6 sm:px-16 py-10 mt-16">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Left section */}
                <div>
                    <h1 className="font-serif text-2xl mb-3 text-gray-900">EatUzbekistan.uz</h1>
                    <p className="text-sm">{t("footer_text")}</p>
                    <div className="flex gap-4 items-center mt-4">
                        <a href="https://www.instagram.com/EatUzbekiston.uz" target="_blank" rel="noopener noreferrer">
                            <img src={insta_i} alt="Instagram sahifamiz" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                        </a>
                        <a href="https://www.facebook.com/EatUzbekiston.uz" target="_blank" rel="noopener noreferrer">
                            <img src={face_i} alt="Facebook sahifamiz" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
                        </a>
                        <a href="https://t.me/EatUzbekiston_uz" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-blue-500 text-[26px] hover:scale-110 transition-transform duration-200" />
                        </a>
                        <a href="https://www.youtube.com/EatUzbekiston.uz" target="_blank" rel="noopener noreferrer">
                            <img src={you_tube} alt="YouTube kanalimiz" className="w-9 h-9 hover:scale-110 transition-transform duration-200" />
                        </a>
                    </div>
                </div>

                {/* Middle links */}
                <div className="flex gap-12">
                    <div>
                        <h3 className="font-semibold mb-2">{t("footer_link")}</h3>
                        <ul className="text-sm space-y-1">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_l_1")}</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_l_2")}</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_l_3")}</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">
                                <Link to="/contact">
                                    <a href="#">{t("footer_con")}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">{t("footer_navigation")}</h3>
                        <ul className="text-sm space-y-1">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_m_s")}</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_m_r")}</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_picture")}</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">{t("footer_m_c")}</li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="font-semibold text-lg mb-2">{t("footer_follow")}</h2>
                    <p className="text-sm mb-3">{t("footer_subscribe")}</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Emailingizni kiriting"
                            className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-medium rounded-md px-4 py-2 mt-2 w-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            {t("footer_subscribe_button")}
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-xs mt-10 border-t border-gray-300 pt-4 text-gray-600">
                © 2025 EatUzbekistan.uz. Barcha huquqlar himoyalangan.
            </div>
        </footer>
    )
}

export default Footer
