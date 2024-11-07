import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/letter-g.png";

const AppHeader = () => {
  const { basename } = useMyContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-900 text-indigo-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo Section */}
        <NavLink
          to={`${basename}/`}
          className="flex items-center space-x-4 group"
        >
          <img
            src={logo}
            alt="Geonic Reader Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-indigo-100 group-hover:text-indigo-300">
              <strong>Geo</strong>nic <strong>Rea</strong>der°
            </span>
            {/* Stylish Underline Effect */}
            <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </h1>
        </NavLink>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="text-indigo-200 md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-indigo-900 md:static md:flex md:w-auto md:items-center transition-all duration-300 z-40`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 font-medium text-lg p-6 md:p-0">
            {[
              {
                to: `${basename}/`,
                label: "Home",
                icon: "M4 12l8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5",
              },
              {
                to: `${basename}/readings`,
                label: "Cards",
                icon: "M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z",
              },
              {
                to: `${basename}/favorited`,
                label: "Your Pick",
                icon: "M17 21l-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z",
              },
            ].map((item) => (
              <li key={item.label} className="relative group">
                <NavLink
                  to={item.to}
                  className="flex items-center space-x-2 hover:text-indigo-300"
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-5 h-5 text-indigo-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    />
                  </svg>
                </NavLink>
                {/* Stylish Underline Effect */}
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
