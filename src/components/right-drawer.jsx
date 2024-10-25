import React from "react";
import BionicSettingMenu from "./bionicSettings/bionic-setting-menu.jsx";

const RightDrawer = ({
                         handleChangeBoldLetter,
                         handleChangeTextColor,
                         handleChangeThemeColor,
                         handleChangeFontSize,
                         preSelectionBoldLetter
                     }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Button to trigger drawer */}
            <div>
                <button
                    className="text-gray-800  hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-2 py-2 mb-2"
                    type="button"
                    onClick={toggleDrawer}
                >
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                              d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                    </svg>
                </button>
            </div>

            {/* Drawer component */}
            <div
                className={` overflow-y-autofixed top-0 right-0 z-40 h-screen p-4 mt-28 overflow-y-auto transition-transform bg-gray-50 w-100 
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >

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
                    handleChangeFontSize={handleChangeFontSize}
                    preSelectionBoldLetter={preSelectionBoldLetter}
                ></BionicSettingMenu>


            </div>
        </div>
    );
};
export default RightDrawer;
