import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner1 from "../../assets/images/Banner5.png";
import Banner2 from "../../assets/images/Banner6.png";

const banners = [Banner1, Banner2];

export default function AutoBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mt-10">
      <hr className="p-5 mb-10 border-neutral-800" />

      {/* Banner Container */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-[21/9] lg:h-[500px] rounded-lg shadow-lg">
        <AnimatePresence>
          {banners.map(
            (banner, index) =>
              index === currentIndex && (
                <motion.img
                  key={index}
                  src={banner}
                  alt="Banner"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ x: "-100%", opacity: 0 }} // Start from left
                  animate={{ x: "0%", opacity: 1 }} // Move to center
                  exit={{ x: "100%", opacity: 0 }} // Exit to right
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
