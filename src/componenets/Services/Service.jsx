import React from "react";
import { Service } from "../../constants/index";

const project = () => {
  return (
    <div className="mt-20 " id="Projects">
      <hr className="p-5  mb-10 border-neutral-800 " />
      <h2 className="text-5xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider bg-gradient-to-r from-[#747474] to-white bg-clip-text text-transparent font-semibold uppercase ">
        Why Choose Us
      </h2>
      <div className="flex flex-wrap mt-15 ">
        {Service.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2 transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform"
            data-aos="fade up"
            data-aos-delay="500"
          >
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-1 mt-5 text-center bg-gradient-to-r from-[#737373] to-white bg-clip-text text-transparent font-semibold ">
                <div className="flex justify-center mb-5 text-gray-700   "></div>
                {option.title}
              </p>

              <ul>
                {option.details.map((detail, index) => (
                  <li
                    key={index}
                    className="mt-8 flex items-center font-bold text-left"
                  >
                    <span className="ml-12">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
