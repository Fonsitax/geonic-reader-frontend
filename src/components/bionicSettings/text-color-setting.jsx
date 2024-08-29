import React from "react";

const TextColorSetting = ({ handleChangeTextColor }) => {
    const buttons = [
        {
            gradient: 'from-blue-900 via-blue-900 to-blue-900',
            ring: 'focus:ring-blue-300 dark:focus:ring-blue-800',
            textColorClass: 'text-blue-900'
        },
        {
            gradient: 'from-green-900 via-green-900 to-green-900',
            ring: 'focus:ring-green-300 dark:focus:ring-green-800',
            textColorClass: 'text-green-900'
        },
        {
            gradient: 'from-cyan-900 via-cyan-900 to-cyan-900',
            ring: 'focus:ring-cyan-300 dark:focus:ring-cyan-800',
            textColorClass: 'text-cyan-600'
        },
        {
            gradient: 'from-gray-300 via-gray-300 to-gray-300',
            ring: 'focus:ring-gray-100 dark:focus:ring-gray-100',
            textColorClass: 'text-gray-300'
        },
        {
            gradient: 'from-lime-600 via-lime-600 to-lime-600',
            ring: 'focus:ring-lime-300 dark:focus:ring-lime-800',
            textColorClass: 'text-lime-600'
        },
        {
            gradient: 'from-red-600 via-red-600 to-red-600',
            ring: 'focus:ring-red-300 dark:focus:ring-red-800',
            textColorClass: 'text-red-600'
        },
        {
            gradient: 'from-pink-500 via-pink-500 to-pink-500',
            ring: 'focus:ring-pink-300 dark:focus:ring-pink-800',
            textColorClass: 'text-pink-500'
        },
        {
            gradient: 'from-purple-500 via-purple-500 to-purple-500',
            ring: 'focus:ring-purple-300 dark:focus:ring-purple-800',
            textColorClass: 'text-purple-600'
        },
    ];

    const handleOnClick = (textColorClass) => {
        handleChangeTextColor(textColorClass);
    }

    return (
        <div>
            <h1 className="text-center text-sm font-medium mb-4">Font Color</h1>

            {buttons.map((button, index) => (
                <button
                    key={index}
                    type="button"
                    className={` w-10 h-10 rounded-full bg-gradient-to-r ${button.gradient} hover:bg-gradient-to-br focus:ring-4 focus:outline-none ${button.ring} font-medium text-sm px-5 py-2.5 text-center me-2 mb-2`}
                    onClick={() => handleOnClick(button.textColorClass)}
                >
                </button>
            ))}
        </div>
    );
};

export default TextColorSetting;
