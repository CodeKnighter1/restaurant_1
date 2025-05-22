import insta_i from '@/images/insta_i.png'
import { FaTelegram } from 'react-icons/fa'
import face_i from '@/images/face_i.png'
import you_tube from '@/images/you_tube.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-300 py-10 px-6 sm:px-16 mt-10">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Left section */}
                <div>
                    <h1 className="font-serif text-2xl mb-2">EatUzbekistan.uz</h1>
                    <p className="text-sm">Bizning yangi qadamlarimizni kuzatib boring:</p>
                    <div className="flex gap-4 items-center mt-4">
                        <a href="https://www.instagram.com/EatUzbekiston.uz" target="_blank" rel="noopener noreferrer">
                            <img src={insta_i} alt="Instagram sahifamiz" className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/EatUzbekiston.uz" target="_blank" rel="noopener noreferrer">
                            <img src={face_i} alt="Facebook sahifamiz" className="w-6 h-6" />
                        </a>
                        <a href="https://t.me/EatUzbekiston_uz" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-blue-400 text-[26px]" />
                        </a>
                        <a href="https://www.youtube.com/EatUzbekiston.uz" target="_blank" rel="noopener noreferrer">
                            <img src={you_tube} alt="YouTube kanalimiz" className="w-8 h-8" />
                        </a>
                    </div>
                </div>

                {/* Middle links */}
                <div className="flex gap-12">
                    <div>
                        <h3 className="font-semibold mb-2">Foydali havolalar</h3>
                        <ul className="text-sm space-y-1">
                            <li><a href="#">Biz haqimizda</a></li>
                            <li><a href="#">Shartlar</a></li>
                            <li><a href="#">Maxfiylik</a></li>
                            <li>
                                <Link to="/contact">
                                    <a href="#">Aloqa</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Navigatsiya</h3>
                        <ul className="text-sm space-y-1">
                            <li><a href="#">Bosh sahifa</a></li>
                            <li><a href="#">Top restoranlar</a></li>
                            <li><a href="#">Galereya</a></li>
                            <li><a href="#">Aloqa</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="font-semibold text-lg mb-2">Obuna bo‘ling</h2>
                    <p className="text-sm mb-3">O'zbekistondagi yangiliklar va lahzalardan xabardor bo‘ling</p>
                    <input
                        type="email"
                        placeholder="Emailingizni kiriting"
                        className="w-full border border-gray-300 rounded-md p-2 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-700 w-full">
                        Ro'yxatdan o'tish
                    </button>
                </div>
            </div>

            <div className="text-center text-xs mt-10 border-t border-gray-700 pt-4">
                © 2025 EatUzbekistan.uz. Barcha huquqlar himoyalangan.
            </div>
        </footer>
    )
}

export default Footer
