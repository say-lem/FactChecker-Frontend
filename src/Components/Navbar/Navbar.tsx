import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Asset 1@4x 1.png";
import { navLinks } from "../Shared/constant";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const switchToLogin = () => navigate("/login");

  const hideNavbarPaths = ["/login", "/signup"];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 flex items-center justify-center">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-semibold flex items-center gap-3">
            <img src={logo} alt="logo" />
            <p className="text-[#181D6B]">TruthCheck</p>
          </div>

          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-gray-700 hover:text-[#333FE88A] transition ${
                  location.pathname === link.path ? "text-blue-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <select
              defaultValue="english"
              name="language"
              id="language"
              className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="english">English</option>
              <option value="igbo">Igbo</option>
              <option value="hausa">Hausa</option>
              <option value="yoruba">Yoruba</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-[#333FE88A] p-3 rounded-[8px] text-white hidden md:flex">
              Get Premium
            </button>
            <button
              onClick={switchToLogin}
              className="border border-[#333FE88A] md:flex items-center gap-2 p-3 rounded-[8px] text-[#333FE88A] hidden"
            >
              Login
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`block py-2 text-gray-700 hover:text-blue-600 transition ${
                  location.pathname === link.path ? "text-blue-600" : ""
                }`}
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
