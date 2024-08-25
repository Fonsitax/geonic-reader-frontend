import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../context/MyContext";




const ReadingCard = ({ id, image, country, title, description, text, onFavorite, onRemoveFavorite }) => {
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
            className="max-w-sm bg-gray-100 border border-indigo-200 rounded-xl shadow dark:bg-indigo-950 dark:border-indigo-700 ">
            <img className="w-full h-auto object-cover rounded-t-xl sm:w-80 md:w-96 lg:w-full" 
            src={image} 
            alt={null}
            />

            <div className="p-5 text-center">
                <span className=" ml-2 font-medium uppercase text-indigo-500">
                    {country}
                </span>
                    <div className="mx-2 text-2xl font-bold tracking-tight text-indigo-900">
                        {title}
                    </div>   
                        <p className="mx-2 text-indigo-900 text-justify leading-normal ">
                            {description}
                        </p>

                <div className="mt-4 flex flex-col items-center space-y-4">
                 <div className="flex flex-col items-center">


                    {isFavoriteReading ? (
                        <button
                         onClick={() => handleRemoveFavorite()}
                            className="text-red-500 hover:text-red-700 mt-2"
                     >
                            Unfavorite
                        </button>
                 ) : (
                        <button
                        onClick={() => handleAddFavorite()}
                        className="text-blue-500 hover:text-blue-700 mt-2"
                    >
                        Add to Favorite
                         </button>
                )}
                </div>

                    <NavLink to={`${basename}/reading/${id}`}>
                        <button
                            className="bg-indigo-700 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded-full">
                            Read this card
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ReadingCard;