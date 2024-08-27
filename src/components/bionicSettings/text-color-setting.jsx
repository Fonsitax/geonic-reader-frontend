import React from "react";

const TextColorSetting = ({ handleChangeTextColor }) => {
    const buttons = [
        {
            gradient: 'from-blue-500 via-blue-600 to-blue-700',
            ring: 'focus:ring-blue-300 dark:focus:ring-blue-800',
            textColorClass: 'text-blue-900'
        },
        {
            gradient: 'from-green-400 via-green-500 to-green-600',
            ring: 'focus:ring-green-300 dark:focus:ring-green-800',
            textColorClass: 'text-green-900'
        },
        {
            gradient: 'from-cyan-400 via-cyan-500 to-cyan-600',
            ring: 'focus:ring-cyan-300 dark:focus:ring-cyan-800',
            textColorClass: 'text-cyan-900'
        },
        {
            gradient: 'from-teal-400 via-teal-500 to-teal-600',
            ring: 'focus:ring-teal-300 dark:focus:ring-teal-800',
            textColorClass: 'text-teal-900'
        },
        {
            gradient: 'from-lime-200 via-lime-400 to-lime-500',
            ring: 'focus:ring-lime-300 dark:focus:ring-lime-800',
            textColorClass: 'text-lime-900'
        },
        {
            gradient: 'from-red-400 via-red-500 to-red-600',
            ring: 'focus:ring-red-300 dark:focus:ring-red-800',
            textColorClass: 'text-red-900'
        },
        {
            gradient: 'from-pink-400 via-pink-500 to-pink-600',
            ring: 'focus:ring-pink-300 dark:focus:ring-pink-800',
            textColorClass: 'text-pink-900'
        },
        {
            gradient: 'from-purple-500 via-purple-600 to-purple-700',
            ring: 'focus:ring-purple-300 dark:focus:ring-purple-800',
            textColorClass: 'text-purple-900'
        },
    ];

    const handleOnClick = (textColorClass) => {
        handleChangeTextColor(textColorClass);
    }

    return (
        <div>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    type="button"
                    className={`rounded-full  bg-gradient-to-r ${button.gradient} hover:bg-gradient-to-br focus:ring-4 focus:outline-none ${button.ring} font-medium text-sm px-5 py-2.5 text-center me-2 mb-2`}
                    onClick={() => handleOnClick(button.textColorClass)}
                >
                </button>
            ))}
        </div>
    );
};

export default TextColorSetting;
