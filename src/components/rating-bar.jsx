import React, { useState } from 'react';

const RatingBar = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleMouseEnter = (value) => setHover(value);
    const handleMouseLeave = () => setHover(0);
    const handleClick = (value) => setRating(value);

    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
                <svg
                    key={index}
                    className={`w-6 h-6 cursor-pointer transition-colors duration-200 ease-in-out ${index < (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                    onMouseEnter={() => handleMouseEnter(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index + 1)}
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            ))}
        </div>
    );
};

export default RatingBar;
