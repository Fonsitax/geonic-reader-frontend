import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../context/MyContext';


const AppHeader = () => {
    const { basename } = useMyContext();

    return (

        <header className="text-blue-800 mb-10 p-8 flex justify-between items-center flex-wrap">
  <h1 className="text-3xl font-semibold">Geonic Reader</h1>
  <nav aria-label="Main navigation">
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 font-semibold text-xl mt-4 sm:mt-0">
      <li className="flex items-center">
        <NavLink 
          to={`${basename}/`} 
          className="relative flex items-center space-x-2 text-white-300 hover:text-indigo-600 
                     before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] 
                     before:bg-indigo-600 before:scale-x-0 before:origin-left before:transition-transform 
                     before:duration-300 hover:before:scale-x-100"
        >
          <span>Home</span>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
          </svg>
        </NavLink>
      </li>
      <li className="flex items-center">
        <NavLink 
          to={`${basename}/readings`} 
          className="relative flex items-center space-x-2 text-white-300 hover:text-indigo-600 
                     before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] 
                     before:bg-indigo-600 before:scale-x-0 before:origin-left before:transition-transform 
                     before:duration-300 hover:before:scale-x-100"
        >
          <span>Readings</span>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
          </svg>
        </NavLink>
      </li>
      <li className="flex items-center">
        <NavLink 
          to={`${basename}/favorited`} 
          className="relative flex items-center space-x-2 text-white-300 hover:text-indigo-600 
                     before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] 
                     before:bg-indigo-600 before:scale-x-0 before:origin-left before:transition-transform 
                     before:duration-300 hover:before:scale-x-100"
        >
          <span>Your Picks</span>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
          </svg>
        </NavLink>
      </li>
    </ul>
  </nav>
</header>


    );
}

export default AppHeader;
