import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // For navigation
import banner1 from "../../assets/images/Banner1.png";
import banner2 from "../../assets/images/Banner2.png";
const banners = [
  {
    image: [banner1], // Replace with your actual image path
    title: "Experience Unmatched Performance",
    description:
      "Discover the thrill of Audi sports cars with cutting-edge technology.",
    buttonText: "Explore Models",
    buttonLink: "/models", // Change to actual route
  },
  {
    image: [banner2],
    title: "Luxury Meets Speed",
    description:
      "Audi redefines driving with elegance and powerful performance.",
    buttonText: "View Offers",
    buttonLink: "/offers",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Banner Image */}
          <img
            src={banners[currentIndex].image}
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Banner Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 p-4">
            <h2 className="text-xl md:text-3xl font-bold">
              {banners[currentIndex].title}
            </h2>
            <p className="mt-2 md:text-lg">
              {banners[currentIndex].description}
            </p>
            <Link
              to={banners[currentIndex].buttonLink}
              className="mt-4 bg-red-600 hover:bg-red-800 px-6 py-2 rounded text-white"
            >
              {banners[currentIndex].buttonText}
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-900 p-3 rounded-full text-white transition duration-300"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-900 p-3 rounded-full text-white transition duration-300"
      >
        ❯
      </button>
    </div>
  );
}
