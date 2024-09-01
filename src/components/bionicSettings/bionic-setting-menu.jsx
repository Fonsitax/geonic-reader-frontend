import React from 'react';
import BoldLetterSetting from "./bold-letter-setting.jsx";
import TextColorSetting from "./text-color-setting.jsx";
import ThemeSetting from "./theme-setting.jsx";
import FontSizeSetting from "./font-size-setting.jsx";

const BionicSettingMenu = ({
    handleChangeBoldLetter,
    handleChangeTextColor,
    handleChangeThemeColor,
    handleChangeFontSize
}) => {
    return (
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-indigo-900 text-center text-lg font-semibold">
                Customization
            </h1>
            <div className="space-y-6">
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <BoldLetterSetting handleChangeBoldLetter={handleChangeBoldLetter} />
                </div>
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <TextColorSetting handleChangeTextColor={handleChangeTextColor} />
                </div>
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <ThemeSetting handleChangeThemeColor={handleChangeThemeColor} />
                </div>
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <FontSizeSetting handleChangeFontSize={handleChangeFontSize} />
                </div>
            </div>
        </div>
    );
};

export default BionicSettingMenu;
