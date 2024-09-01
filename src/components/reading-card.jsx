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
            className="leading-loose max-w-xs border border-indigo-700 rounded-lg shadow-md 
                       bg-indigo-800 text-white transition duration-300 mb-8 
                       hover:bg-indigo-100 hover:text-indigo-800 hover:shadow-lg hover:scale-105">
            
            {/* Image container with relative positioning */}
            <div className="relative">
                <NavLink to={`${basename}/reading/${id}`}>
                    <img className="w-full h-auto object-cover rounded-t-lg sm:w-72 md:w-80 lg:w-full cursor-pointer"
                        src={image}
                        alt={title}
                    />
                </NavLink>

                {/* Favorite button with absolute positioning, white color, and larger size */}
                {!hideButtons && (
                    <button
                        onClick={isFavoriteReading ? handleRemoveFavorite : handleAddFavorite}
                        className={`absolute top-2 right-2 p-2 rounded-full bg-opacity-50 bg-gray-800 transition duration-300 ${isFavoriteReading ? 'text-red-500 hover:text-red-700' : 'text-white hover:text-gray-300'}`}>
                        <svg
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill={isFavoriteReading ? "currentColor" : "none"}
                            viewBox="0 0 24 24"
                        >
                            {isFavoriteReading ? (
                                <path
                                    d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
                            ) : (
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                            )}
                        </svg>
                    </button>
                )}
            </div>

            <div className="p-4 text-center mb-6">
                <span className="font-medium uppercase text-indigo-300 hover:text-indigo-500 transition duration-300">
                    {country}
                </span>
                <NavLink to={`${basename}/reading/${id}`}>
                    <div className="p-2 text-xl font-medium tracking-tight hover:text-indigo-500 transition duration-300 cursor-pointer">
                        {title}
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default ReadingCard;
