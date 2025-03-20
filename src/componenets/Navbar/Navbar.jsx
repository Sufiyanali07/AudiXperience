import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/car11.png";
// import LoginForm from "../LoginForm/LoginForm";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-black border-b border-neutral-700/80 mt-5">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center scroll-smooth">
            <div className="flex items-center flex-shrink-0">
              <img className="h-15  mr-2 rounded" src={logo} alt="Logo" />
              <span className="text-2xl tracking-tight bg-gradient-to-r from-[#747474] to-white bg-clip-text text-transparent transition-transform duration-500 ease-in-out hover:scale-115 will-change-transform">
                AudiXperience
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              <li>
                <a
                  href="#about"
                  className="px-2 py-7 border-b-3 border-transparent hover:border-neutral-600  font-medium transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#Technical Skills"
                  className="px-2 py-7 border-b-3 border-transparent hover:border-neutral-600  font-medium transition"
                >
                  Models{" "}
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="px-2 py-7 border-b-3 border-transparent hover:border-neutral-600  font-medium transition"
                >
                  Luxury{" "}
                </a>
              </li>
              <li>
                <a
                  href="#What I Offer"
                  className="px-2 py-7 border-b-3 border-transparent hover:border-neutral-600  font-medium transition"
                >
                  Test Drive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-7 border-b-3 border-transparent hover:border-neutral-600  font-medium transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-7 border-b-3 border-transparent hover:border-neutral-600  font-medium transition"
                >
                  About us
                </a>
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <button
                // onClick={() => setIsOpen(true)}
                className="py-2 px-3 border rounded-md transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform"
              >
                Login
              </button>

              <a
                href="https://www.linkedin.com/in/sayyed-sufiyan-ali-7483192a8/"
                className="bg-[#747474] py-2 px-4 rounded-md transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform"
              >
                SingUp
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="py-4 space-x-2 grid gap-3  ">
                <li>
                  <a href="#about">Home</a>
                </li>
                <li>
                  <a href="#Education">Models</a>
                </li>
                <li>
                  <a href="#Technical Skills">Luxury</a>
                </li>
                <li>
                  <a href="#Projects">Test Drive</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#What I Offer">About Us</a>
                </li>
              </ul>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Sufiyanali07"
                  className="py-2 px-3 border rounded-md transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform"
                >
                  Login
                </a>
                <a
                  href="https://www.linkedin.com/in/sayyed-sufiyan-ali-7483192a8/"
                  className="py-2 px-3 rounded-md bg-[#747474] transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform"
                >
                  Sing up
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* {isOpen && <LoginForm setIsOpen={setIsOpen} />} */}
    </>
  );
};

export default Navbar;
