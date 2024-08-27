import React from "react";

const ThemeSetting = ({ handleChangeThemeColor }) => {
    const handleOnClick = (themeColor) => {
        handleChangeThemeColor(themeColor);
    }

    const buttons = [
        { class: 'bg-gray-50', hover: 'hover:bg-gray-500' },
        { class: 'bg-gray-200', hover: 'hover:bg-gray-700' },
        { class: 'bg-blue-200', hover: "hover:bg-blue-700" },
        { class: 'bg-red-200', hover: "hover:bg-red-700" },
        { class: 'bg-pink-200', hover: "hover:bg-pink-700" },
    ];

    return (
        <div>
            <div className=" border-black rounded-l flex space-x-4 ">
                {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={`${btn.class} ${btn.hover} text-white font-bold py-2 px-4 rounded-full w-12 h-10 border-2`}
                            onClick={() => handleOnClick(btn.class)}>
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default ThemeSetting


