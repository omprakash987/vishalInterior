import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SendEmail from "../backendComponents/SendEmail";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (state) => {
    setIsDropdownOpen(state);
  };

  const handleLogo = () => {
    navigate("/");
  };

  const phoneNumber = "9354103871"
  const handleWhatsapp = ()=>{
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }

  return (
    <>
      <nav className="w-full border-b-2 m-0">
        <div className="flex items-center justify-between py-4 px-6 max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#008489] flex items-center justify-center rounded-full">
              <div
                onClick={handleLogo}
                className="cursor-pointer text-white text-2xl font-bold"
              >
               <img src="/logo.jpg" alt="" className=" rounded-full" />
              </div>
            </div>
            <div className="ml-2">
              <h1 className="text-lg font-semibold">
                <span className="text-[#008489]">VISHAL</span>
                <span className="text-[#C0A080]">INTERIOR</span>
              </h1>
              <p className="text-xs text-gray-500 leading-tight">
                MORE ROOM FOR JOY
              </p>
            </div>
          </div>

          
          <ul className="hidden md:flex items-center space-x-6 text-gray-600 text-sm whitespace-nowrap z-10">
            <li
              className="hover:text-[#008489] cursor-pointer flex items-center relative"
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
            >
              Design Gallery <span className="ml-1 text-xs">▼</span>
              <ul
                className={`absolute top-full left-0 mt-2 w-72 cursor-pointer bg-white shadow-lg rounded-md transition-all duration-700 ease-in-out transform ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
                }`}
              >
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link to="/modular-kitchen-design" className="text-gray-800 font-bold text-2xl">
                    Modular Kitchen
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link to="/living-room-design" className="text-gray-800 font-bold text-2xl">
                    Living Room
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link to="/bedroom-design" className="text-gray-800 font-bold text-2xl">
                    Bedroom
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <Link to="/pooja-room-design" className="text-gray-800 font-bold text-2xl">
                    Pooja Room
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-[#008489] cursor-pointer">Recent Projects</li>
            <li className="hover:text-[#008489] cursor-pointer">Reviews</li>
            <li className="hover:text-[#008489] cursor-pointer">Site Services</li>
            <li className="hover:text-[#008489] cursor-pointer flex items-center">
              DC Signature <span className="text-red-500 text-xs font-bold ml-1">New</span>
            </li>
            <li className="hover:text-[#008489] cursor-pointer flex items-center">
              Guides <span className="ml-1 text-xs">▼</span>
            </li>
            <li className="hover:text-[#008489] cursor-pointer flex items-center">
              Blogs <span className="ml-1 text-xs">▼</span>
            </li>
            <li className="hover:text-[#008489] cursor-pointer flex items-center">
              Cities <span className="ml-1 text-xs">▼</span>
            </li>
            <li className="hover:text-[#008489] cursor-pointer flex items-center">
              More <span className="ml-1 text-xs">▼</span>
            </li>
          </ul>
          <div onClick={handleWhatsapp} className="text-green-500 text-2xl cursor-pointer"><FaWhatsapp /></div>

          <SendEmail/>
        </div>
      </nav>

     
      
    </>
  );
};

export default Navbar;
