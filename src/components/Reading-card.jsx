import React from "react";
import { Link } from "react-router-dom";

const ReadingCard = ({ id, image, title, country, description, text, onFavorite, onRemoveFavorite }) => {
    return (
        <div className="max-w-sm bg-gray-50 border border-indigo-200 rounded-lg shadow dark:bg-indigo-900 dark:border-indigo-700">
            <img src={image} alt={null}/>
            
            <div className="p-5">
                <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </div>
            <span className="font-bold">
                    {country}
            </span>
                <p className="mb-3 text-gray-700 dark:text-gray-400">
                    {description}
                </p>     
            
            <div>
                <button 
                    onClick={() => onFavorite(id)} 
                    className="text-blue-500 hover:text-blue-700 mt-2">
                    Add to Favorite
                </button>

                <button
                    onClick={() => onRemoveFavorite(id)}
                    className="text-red-500 hover:text-red-700 mt-2">
                    Unfavorite
                </button>
                
                <button className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded ">
                    Read More 
                </button>
            </div>
                

            </div>
            
                
        </div>
    );
}

export default ReadingCard;