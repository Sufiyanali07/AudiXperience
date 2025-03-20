import React from "react";
import img2 from "../../assets/images/car7.png";
const Aboutsection = () => {
  return (
    <div>
      <hr className="p-5  mb-10 border-neutral-800" />
      <div className="sm:grid sm:place-items-center ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
            >
              <img
                src={img2}
                alt=""
                className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            <div className="">
              <div className="space-y-5 sm:p-16 pb-6 text-right ">
                <h1
                  data-aos="fade-up"
                  className="sm:text-5xl font-bold font-serif bg-gradient-to-r from-[#737373] to-white bg-clip-text text-transparent"
                >
                  ABOUT-US
                </h1>
                <p
                  className="bg-gradient-to-r from-[#737373] to-white bg-clip-text text-transparent font-semibold"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  An Audi isn’t just a car—it’s a statement. Every drive is a
                  blend of power, luxury, and innovation. Feel the precision,
                  embrace the performance, and own the road
                </p>

                <button
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" bg-[#747474] text-white py-2 px-5 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform "
                >
                  EXPLORE-NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
