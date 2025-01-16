import React, { useState } from "react";
import BionicSettingMenu from "./bionicSettings/bionic-setting-menu.jsx";

const FloatingMenu = ({
  handleChangeBoldLetter,
  handleChangeTextColor,
  handleChangeThemeColor,
  handleChangeFontSize,
  preSelectionBoldLetter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Action Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        aria-expanded={isOpen}
        aria-label="Toggle settings menu"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 6v-6m-6 0h6m6 0h-6"
          />
        </svg>
      </button>

      {/* Floating Menu */}
      {isOpen && (
        <div
          className="fixed bottom-16 right-4 bg-white border rounded-lg shadow-lg w-64 p-4 z-50"
          role="menu"
          aria-label="Settings menu"
        >
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Bionic Settings
            </h2>
          </div>
          <BionicSettingMenu
            handleChangeBoldLetter={handleChangeBoldLetter}
            handleChangeTextColor={handleChangeTextColor}
            handleChangeThemeColor={handleChangeThemeColor}
            handleChangeFontSize={handleChangeFontSize}
            preSelectionBoldLetter={preSelectionBoldLetter}
          />
          <button
            onClick={toggleMenu}
            className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;
