import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../context/MyContext';


const AppHeader = () => {
  const { basename } = useMyContext(); 

  return (
    <header className=" text-indigo-700 pl-52 pr-52 pt-10 pb-8 flex justify-between items-center ">
      <h1 className="text-3xl font-semibold">Geonic Reader</h1>
      <nav aria-label="Main navigation">
        <ul className="flex space-x-4 font-semibold text-xl ">
          <li>
            <NavLink to={`${basename}/`} className="text-white-300">Home</NavLink>
          </li>
          <li>
            <NavLink to={`${basename}/readings`} className="text-white-300">All Readings</NavLink>
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
