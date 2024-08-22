import React from "react";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../context/MyContext";

const ReadingCard = ({ id, image, title, country, description, text, onFavorite, onRemoveFavorite }) => {
const basename = useMyContext().basename;
console.log(image);
    return (
        <div className="max-w-sm bg-gray-100 border border-indigo-200 rounded-xl shadow dark:bg-indigo-950 dark:border-indigo-700 ">
            <img src={image} alt={null}/>
            
            <div className="p-5">
                <div className="mx-2 text-2xl font-bold tracking-tight text-indigo-900">
                    {title}
                </div>
            <span className=" ml-2 font-bold uppercase text-indigo-500 underline">
                    {country}
            </span>
                <p className="mx-2 text-indigo-900 text-justify leading-normal ">
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
                <NavLink to={`${basename}/reading/${id}`}>
                <button 
                className="bg-indigo-700 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded-full">     
                    Read More 
                </button>
                </NavLink>
                
            </div>
                

            </div>
            
                
        </div>
    );
}

export default ReadingCard;