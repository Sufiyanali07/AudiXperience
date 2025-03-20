import React from "react";
// import { services } from "../constants";
import { Customer } from "../../constants/index";

const Testimonials = () => {
  return (
    <div>
      <hr className="p-5  mb-10 border-neutral-800" />

      <div id="What I Offer" className="mt-20 tracking-wide mb-20">
        <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center my-10 lg:my-20 bg-gradient-to-r from-[#747474] to-white bg-clip-text text-transparent uppercase">
          Experience Through Their Eyes
        </h2>
        <div
          className="flex flex-wrap justify-center "
          data-aos="fade up"
          data-aos-delay="500"
        >
          {Customer.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-lg transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform ">
                <p>{service.text}</p>
                <div className="flex mt-8 items-center">
                  {/* <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  // src={service.image}
                  alt={service.title}
                /> */}
                </div>
                <h2 className="text-lg font-semibold">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
