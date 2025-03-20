import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "../../assets/images/Banner4.png";
const banners = [Banner1, Banner2];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <hr className="p-5  mb-10 border-neutral-800 mt-10" />

      <div className="relative w-full max-h-screen overflow-hidden mt-10">
        <div className="w-full h-auto aspect-[16/9] md:aspect-[21/9] lg:h-[500px]">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={banners[currentIndex]}
              alt="Banner"
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
