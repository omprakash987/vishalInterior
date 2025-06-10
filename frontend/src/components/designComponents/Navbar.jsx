import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SendEmail from "../backendComponents/SendEmail";
import { FaWhatsapp, FaBars, FaTimes, FaPhoneAlt, FaPalette } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";


const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  const handleLogo = () => {
    navigate("/");
  };

  const phoneNumber = "7004427348";
  const handleWhatsapp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const handleGmail = ()=>{
    const recipientEmail = 'kanuparewa371@gmail.com'
    const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
    window.open(mailUrl, "_blank");
  }

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubMenu = () => {
    setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
  };

  return (
    <>
      <nav className="w-full border-b-2 m-0 sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between py-4 px-6 max-w-screen-xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#008489] flex items-center justify-center rounded-full">
              <div
                onClick={handleLogo}
                className="cursor-pointer text-white text-2xl font-bold"
              >
                <img src="/logo.jpg" alt="" className="rounded-full" />
              </div>
            </div>
            <div className="ml-2">
              <h1 className="text-lg font-semibold">
                <span className="text-[#008489] m-12">VISHAL</span>
                <br />
                <span className="text-[#C0A080] m-1">INTERIOR</span>
                <span className="text-[#C0A080]">&</span>
                <span className="text-[#C0A080] m-1">EXTERIOR</span>
              </h1>
              <p className="text-xs text-gray-500 leading-tight m-3">
                MORE ROOM FOR JOY
              </p>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div
            className="md:hidden text-2xl cursor-pointer text-gray-600"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-600 text-sm whitespace-nowrap z-10">
            <li
              className="hover:text-[#008489] cursor-pointer flex items-center relative font-bold"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Design Gallery <span className="ml-1 text-xs">▼</span>
              <ul
                className={`absolute top-full left-0 mt-2 w-[36rem] grid grid-cols-2 gap-2 cursor-pointer bg-white bg-opacity-80 backdrop-filter backdrop-blur-md shadow-lg rounded-md transition-all duration-700 ease-in-out transform ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
                }`}
              >
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/modular-kitchen-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    Modular Kitchen
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/living-room-design"
                    className="text-gray-800 font-bold text-2xl "
                  >
                    Living Room
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/bedroom-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    Bedroom
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/pooja-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    Pooja Room
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/wordrobe-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                   wardrobe
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/kids-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    kids Bedroom
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/dining-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    Dining room
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/homeoffice-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    Home Office
                  </Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/Bathroom-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                   BathRoom
                  </Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/Balcony-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    Balcony
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/1BHK-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    1BHK
                  </Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/2BHK-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                   2BHK
                  </Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/3BHK-room-design"
                    className="text-gray-800 font-bold text-2xl"
                  >
                    3BHK
                  </Link>
                </li>
              </ul>
            </li>
            <Link
            to={'/recent-projects'}
             className="hover:text-[#008489] cursor-pointer font-bold">
              Recent Projects
            </Link>
            <Link
            to={'/reviews'}
             className="hover:text-[#008489] cursor-pointer font-bold">
              Reviews
            </Link>
            <Link
              to={"/service"}
              className="hover:text-[#008489] cursor-pointer font-bold"
            >
              Services
            </Link>
            <Link
            to={'/about-us'}
             className="hover:text-[#008489] cursor-pointer flex items-center font-bold">
              About us
            </Link>
          </ul>

          {/* WhatsApp and Get Quote Icons for Desktop */}
          <div className="hidden md:flex space-x-4">
            <div
              onClick={handleWhatsapp}
              className="text-green-500 text-2xl cursor-pointer"
            >
              <FaWhatsapp />
            </div>
            <SendEmail quote={"Get Quote"} />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <FaTimes
              className="text-2xl text-gray-600 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>

          <ul className="flex flex-col space-y-6 mt-4 text-gray-600 px-6 text-lg">
            <li
              className="hover:text-[#008489] cursor-pointer font-bold"
              onClick={toggleMobileSubMenu}
            >
              Design Gallery
              <span className="ml-2 text-sm">
                {isMobileSubMenuOpen ? "▲" : "▼"}
              </span>
            </li>
            {isMobileSubMenuOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-sm text-gray-800">
                <li>
                  <Link to="/modular-kitchen-design">Modular Kitchen</Link>
                </li>
                <li>
                  <Link to="/living-room-design">Living Room</Link>
                </li>
                <li>
                  <Link to="/bedroom-design">Bedroom</Link>
                </li>
                <li>
                  <Link to="/pooja-room-design">Pooja Room</Link>
                </li>
              </ul>
            )}
            <li className="hover:text-[#008489] cursor-pointer font-bold">
              <Link to="/recent-projects">Recent Projects</Link>
            </li>
            <li className="hover:text-[#008489] cursor-pointer font-bold">
              <Link to="/reviews">Reviews</Link>
            </li>
            <li className="hover:text-[#008489] cursor-pointer font-bold">
              <Link to="/service">Services</Link>
            </li>
            <li className="hover:text-[#008489] cursor-pointer font-bold">
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around py-2 z-50 md:hidden">
        <div
          onClick={() => navigate("/modular-kitchen-design")}
          className="flex flex-col items-center text-gray-600 text-sm cursor-pointer"
        >
          <IoHomeOutline className="text-2xl " />
          <span>Design</span>
        </div>
        <div
          onClick={handleCall}
          className="flex flex-col items-center text-gray-600 text-sm cursor-pointer"
        >
          <FaPhoneAlt className=" text-blue-500 text-2xl" />
          <span>Call Now</span>
        </div>
        <div
          
          className="flex flex-col items-center text-gray-600 text-sm cursor-pointer"
        >
          <SiGmail onClick={handleGmail} className=" text-red-500 text-2xl" />
          <span>Email</span>
        </div>
        <div
          onClick={handleWhatsapp}
          className="flex flex-col items-center text-green-500 text-sm cursor-pointer"
        >
          <FaWhatsapp className="text-2xl" />
          <span>WhatsApp</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
