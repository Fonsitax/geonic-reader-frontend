import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../context/MyContext";


const ReadingCard = ({ id, image, country, title, onFavorite, onRemoveFavorite, hideButtons }) => {
    const basename = useMyContext().basename;
    const favoriteReadings = JSON.parse(localStorage.getItem('favoriteReadings')) || [];
    const [isFavoriteReading, setFavorite] = useState(isCardFavorite);

    function isCardFavorite() {
        return favoriteReadings.some((reading) => reading.id === id);
    }

    const handleRemoveFavorite = () => {
        const favoriteReadings = JSON.parse(localStorage.getItem('favoriteReadings')) || [];
        const newFavorites = favoriteReadings.filter(fReading => fReading.id !== id);

        localStorage.setItem('favoriteReadings', JSON.stringify(newFavorites));
        alert(`Reading has been removed from your favorites!`);

        setFavorite(false);
        if (onRemoveFavorite) {
            onRemoveFavorite(id);
        }
    };


    const handleAddFavorite = () => {
        if (onFavorite) {
            onFavorite(id);
            setFavorite(true);
        }
    }

    return (

        <div
  className="leading-loose max-w-sm border border-indigo-200 rounded-xl hover:shadow-2xl shadow-inner 
             dark:bg-indigo-950 dark:border-indigo-700 bg-slate-100 hover:bg-indigo-100 transition duration-300">
  
  <img className="w-full h-auto object-cover rounded-t-xl sm:w-80 md:w-96 lg:w-full"
       src={image}
       alt={null}
  />

  <div className="p-5 text-center">
    <span className="font-medium uppercase text-indigo-500 hover:text-indigo-700 transition duration-300">
      {country}
    </span>
    <div className="p-2 text-2xl font-medium tracking-tight text-indigo-900 hover:text-indigo-600 transition duration-300">
      {title}
    </div>

    <div className="mt-4 flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center">

        {hideButtons ? <></> : (isFavoriteReading ? (
          <button
            onClick={() => handleRemoveFavorite()}
            className="text-red-500 hover:text-red-700 mt-2 transition duration-300">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
            </svg>
          </button>
        ) : (
          <button
            onClick={() => handleAddFavorite()}
            className="text-blue-500 hover:text-blue-700 mt-2 transition duration-300">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/>
            </svg>
          </button>
        ))}

      </div>
      {hideButtons ? <></> :
        <NavLink to={`${basename}/reading/${id}`}>
          <button
            className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full font-medium 
                       transition duration-300">
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                 viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
            </svg>
          </button>
        </NavLink>
      }
    </div>
  </div>
</div>

    );
}

export default ReadingCard;