import React from "react";
import contact from "../../assets/images/Contact.png";

const ContactForm = () => {
  return (
    <div>
      <hr className="p-5  mt-20 border-neutral-800" />
      <h1 className="text-5xl font-semibold mt-15 uppercase bg-gradient-to-r from-[#747474] to-white bg-clip-text text-transparent ">
        Let’s Start a Conversation
      </h1>
      <div className="container min-h-[500px] flex justify-center ">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <img
              src={contact}
              alt=""
              className="relative -z-10 max-h-[500px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-4 sm:pr:-32 text-left ">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div
                className="mx-auto max-w-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h1 className="text-center text-xl font-bold bg-gradient-to-r from-[#747474] to-white bg-clip-text text-transparent sm:text-5xl mb-5">
                  "Test Drive Today."
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500 ">
                  "The road is calling, and so is your Audi. Reserve your test
                  drive today and feel the thrill firsthand."
                </p>

                <form
                  action="#"
                  className="mt-3 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                  <p className="text-center text-lg font-semibold mb-5">
                    "Reach out and start your Audi journey"
                  </p>

                  <div>
                    <label htmlFor="Name" className="sr-only">
                      Enter Name
                    </label>

                    <div className="relative">
                      <input
                        type="Name"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        placeholder="Enter Name"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Number" className="sr-only">
                      Contact Number
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        placeholder="Enter Contact Number"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="Text" className="sr-only">
                      City
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        placeholder="Enter City "
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-[#747474]  px-5 py-3 text-sm font-medium text-white transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform "
                  >
                    Contact Now
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    No account?
                    <a className="underline" href="#">
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

ContactForm;
