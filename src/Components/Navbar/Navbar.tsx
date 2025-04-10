import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/Asset 1@4x 1.png"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Fact Check", path: "/" },
    { label: "Trending", path: "/trending" },
    { label: "Contact Us", path: "/contact-us" },
    // { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 flex items-center justify-center ">
        <div className="container">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold flex items-center gap-3">
            <img src={logo} alt="" />
            <p className="text-[#181D6B]">TruthCheck</p>
            </div>

        
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
            <button className="bg-[#333FE88A] p-3 rounded-[8px] text-white hidden md:flex">
                Get Premium
            </button>
            <button className=" border border-[#333FE88A] md:flex items-center gap-2 p-3 rounded-[8px] text-[#333FE88A] hidden ">
                <span>Language</span> <IoIosArrowDown className="w-5 h-5"/>
            </button>
        </div>

        
        <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-700">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
        </div>
      
    </nav>
  );
};

