import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../context/MyContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const AppHeader = () => {
  const { basename } = useMyContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-indigo-800 bg-blue-50 top-0 left-0 w-full py-4 md:py-6 lg:py-8 z-50 shadow-md fixed">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
        {/* Logo Section */}
        <NavLink
  to={`${basename}/`}
  className="relative flex items-center group ml-6 md:ml-12 lg:ml-16"
>
  <img
    src="src/assets/letter-g.png" // Replace with the actual logo path
    alt="Geonic Reader Logo"
    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-4"
  />
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold relative">
    <span className="text-indigo-900 dark:text-white group-hover:text-indigo-300">
      Geonic Reader°
    </span>
    {/* Stylish Underline Effect */}
    <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-indigo-700 via-indigo-200 to-indigo-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  </h1>
</NavLink>
        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex items-center justify-center w-full md:w-auto`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row items-center text-center md:space-y-0 md:space-x-8 space-y-6 font-semibold text-lg md:text-xl px-4">
            {[
              { to: `${basename}/`, label: 'Home', icon: 'M4 12l8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5' },
              { to: `${basename}/readings`, label: 'Cards', icon: 'M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z' },
              { to: `${basename}/favorited`, label: 'Your Pick', icon: 'M17 21l-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z' },
            ].map((item) => (
              <li key={item.label} className="relative flex items-center group px-4 py-2">
                <NavLink
                  to={item.to}
                  className="relative flex items-center space-x-2 text-indigo-900 hover:text-indigo-300"
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-indigo-800"
                    aria-hidden="true"
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
                <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="text-indigo-900 md:hidden focus:outline-none px-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
