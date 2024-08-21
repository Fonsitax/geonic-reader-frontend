import React from "react";
import { Link } from "react-router-dom";

const ReadingCard = ({ image, title, country, description, text }) => {
    return (
        <div className="max-w-sm bg-gray-50 border border-indigo-200 rounded-lg shadow dark:bg-indigo-900 dark:border-indigo-700 font-sans">
            <img src={image} alt=""/>
            
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
                <button className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded">
                    Read More </button>
            </div>
            
                
        </div>
    );
}

export default ReadingCard;