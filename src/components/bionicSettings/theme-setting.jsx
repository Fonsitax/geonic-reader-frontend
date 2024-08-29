import React from "react";

const ThemeSetting = ({ handleChangeThemeColor }) => {
    const handleOnClick = (themeColor) => {
        handleChangeThemeColor(themeColor);
    }

    const buttons = [
        { class: 'bg-gray-50', hover: 'hover:bg-gray-50' },
        { class: 'bg-gray-200', hover: 'hover:bg-gray-200' },
        { class: 'bg-blue-200', hover: "hover:bg-blue-200" },
        { class: 'bg-red-200', hover: "hover:bg-red-200" },
        { class: 'bg-pink-200', hover: "hover:bg-pink-200" },
        { class: 'bg-gray-500', hover: "hover:bg-gray-500" },
        { class: 'bg-blue-900', hover: "hover:bg-blue-900" },
    ];

    return (
        <div >
            <h1 className="text-center text-sm font-medium mb-4">Paper Color</h1>
            <div className=" border-black rounded-l flex space-x-4 justify-center ">
                {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={`${btn.class} ${btn.hover} text-white font-bold py-2 px-4 rounded-full w-10 h-10 border-2`}
                            onClick={() => handleOnClick(btn.class)}>
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default ThemeSetting


