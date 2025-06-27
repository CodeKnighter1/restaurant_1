// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TopRestaurants from './components/cards/TopRestaurants';
import Restaurant_cards from './components/cards/restaurant_cards';
import Hotel_cards from './components/cards/hotel_cards';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';
import ForgotPassword from '@/components/auth/ForgotPassword';
import All_res from './pages/All_res';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Auth from './pages/Auth';
import All_hotel from './pages/All_hotel';
import Res_1 from './components/insight/Res_1';
import Footer from './components/shared/Footer';
import CardForm from './components/CardForm'; // Import the new component
import HotelForm from './components/HotelForm';
import AdminPanel from './components/AdminPanel';

AOS.init();

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="top-restaurants">
                <TopRestaurants />
              </section>
              <section id="restaurants">
                <Restaurant_cards />
              </section>
              <section id="hotels">
                <Hotel_cards />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/all-res" element={<All_res />} />
        <Route path="/all-hotel" element={<All_hotel />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/res_1" element={<Res_1 />} />
        <Route path="/add-card" element={<CardForm />} /> {/* Add this route */}
        <Route path="/add-hotel" element={<HotelForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;