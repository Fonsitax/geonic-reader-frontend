import React, { useState } from "react";
import BionicSettingMenu from "./bionicSettings/bionic-setting-menu.jsx";

const RightDrawer = ({ handleChangeBoldLetter, handleChangeTextColor, handleChangeThemeColor }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Button to trigger drawer */}
            <div className="text-center">
                <button
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    type="button"
                    onClick={toggleDrawer}
                >
                    Show right drawer
                </button>
            </div>

            {/* Drawer component */}
            <div
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-gray-50 w-80 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <h5
                    id="drawer-right-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-700"
                >
                    <svg
                        className="w-4 h-4 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    Customization
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <BionicSettingMenu
                    handleChangeBoldLetter={handleChangeBoldLetter}
                    handleChangeTextColor={handleChangeTextColor}
                    handleChangeThemeColor={handleChangeThemeColor}
                ></BionicSettingMenu>


            </div>
        </div>
    );
};
export default RightDrawer;
