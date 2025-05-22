import { IoRestaurantOutline } from "react-icons/io5";
import about_i from '@/images/about_i.jpg';
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import insta_i from '@/images/insta_i.png';

function About() {
  return (
    <div className="p-[50px]">
      <h1 className="text-3xl font-bold hover:underline underline-offset-4 text-center mb-[30px] cursor-pointer">Biz haqimizda</h1>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 bg-gray-200 rounded-md shadow-md">
        <div className="">
          <p className="px-[12px] mt-5 flex items-center gap-[4px] text-black"><IoRestaurantOutline /> Bizning platformamiz — bu sizga yaqin atrofdagi eng yaxshi restoranlarni <br /> topishga yordam beradigan zamonaviy va qulay xizmatdir.</p>
          <p className="px-[12px] mt-2 flex items-center gap-[4px] text-black"><CiLocationOn /> Maqsadimiz — har bir foydalanuvchiga didiga mos, sifatli ovqat va yoqimli <br /> muhit taklif etuvchi restoranlarni topishga ko‘maklashish.</p>
          <p className="px-[12px] mt-2 flex items-center gap-[4px] text-black"><CiStar />Saytimiz orqali siz restoranlar haqida batafsil ma’lumotga ega bo‘lasiz: <br /> menyular, narxlar, manzil, ish vaqti hamda foydalanuvchi izohlari.</p>
          <p className="px-[12px] mt-2 flex items-center gap-[4px] text-black"><CiFaceSmile />Biz doimo xizmatlarimizni takomillashtirib boramiz va yangi restoranlarni <br /> qo‘shib boramiz. Fikr-mulohaza va takliflaringiz biz uchun muhim!</p>

          <h1 className="mt-[30px] text-[20px] text-black">🌐Biz bilan bog‘laning:</h1>
          <a href="https://instagram.com/rahmonqulq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-black hover:underline">
            <img className="w-5" src={insta_i} alt="Instagram logosi" />
            Instagram
          </a>
          <a href="https://telegram.com/utk1rovic_r" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 text-black hover:underline">
            <FaTelegram className="text-blue-500 text-[18px]" />
            Telegram
          </a>
          <span className="flex items-center gap-[5px] mt-[4px] text-black"><MdOutlineMailOutline className="text-[18px]" /> Email:our@gmail.com</span>
        </div>

        <div>
          <img className="w-full md:w-[500px] rounded-bl-3xl rounded-tr-3xl" src={about_i} alt="Biz haqimizda rasmi" />
        </div>
      </div>

    </div>
  )
}

export default About