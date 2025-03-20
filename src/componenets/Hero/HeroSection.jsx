import React from "react";
import car from "../../assets/images/car9.png";

const HeroSection = () => {
  return (
    <div className="container min-h-[500px] flex justify-center ">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="order-1 sm:order-2  "
        >
          <img
            src={car}
            alt=""
            className="relative -z-10 max-h-[300px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
          />
        </div>
        <div className="order-2 sm:order-1 space-y-4 sm:pr:-32 text-left ">
          <p
            data-aos="fade-up"
            className=" text-3xl font-bold  bg-gradient-to-r from-[#737373] to-white bg-clip-text text-transparent "
          >
            AUDI-UNSTOPPABLE
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-5xl lg:text-5xl font-semibold  bg-gradient-to-r from-[#737373] to-white bg-clip-text text-transparent"
          >
            PERFORMANCE
          </h1>

          <button
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-[#747474] py-2 px-5 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform"
          >
            GET-START
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
