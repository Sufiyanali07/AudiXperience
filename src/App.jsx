import { useEffect } from "react";
import "./App.css";
import HeroSection from "./componenets/Hero/HeroSection";
import Navbar from "./componenets/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutsection from "./componenets/About/Aboutsection";
import Service from "./componenets/Services/Service";
import BannerSlider from "./componenets/Banners/Banner";
import AutoBannerSlider from "./componenets/Banners/LeftBanner";
import ContactForm from "./componenets/Contact/ContactForm";
import Footer from "./componenets/Footer/Footer";
import Testimonials from "./componenets/Testimonial/Testimonial";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-sine",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <BannerSlider />
        <Aboutsection />
        <AutoBannerSlider />
        <Service />
        <ContactForm />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
