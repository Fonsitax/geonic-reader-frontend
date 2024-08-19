// src/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../context/MyContext';


const AppHeader = () => {
  const { basename } = useMyContext(); 

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Geonic Reader App</h1>
      <nav aria-label="Main navigation">
        <ul className="flex space-x-4">
          <li>
            <NavLink exact to={`${basename}/`} className="text-white-300">Home</NavLink>
          </li>
          <li>
            <NavLink to={`${basename}/catalog`} className="text-white-300">Catalog</NavLink>
          </li>
          <li>
            <NavLink to={`${basename}/favorited`} className="text-white-300">Favorited</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
