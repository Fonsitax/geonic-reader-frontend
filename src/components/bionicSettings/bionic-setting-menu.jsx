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
        <div className="mt-20">
            <h1 className="mb-10 text-indigo-900 text-center text-sm font-semibold">Customization</h1>
            <div className="p-8 border-2 mb-5">
                <BoldLetterSetting handleChangeBoldLetter={handleChangeBoldLetter}></BoldLetterSetting>
            </div>
            <div className="p-8 border-2 mb-5">
                <TextColorSetting handleChangeTextColor={handleChangeTextColor}> </TextColorSetting>
            </div>
            <div className="p-8 border-2 mb-2">
                <ThemeSetting handleChangeThemeColor={handleChangeThemeColor}></ThemeSetting>
            </div>
            <div className="p-8 border-2 mb-2">
                <FontSizeSetting handleChangeFontSize={handleChangeFontSize}></FontSizeSetting>
            </div>
        </div>
    );
}


export default BionicSettingMenu;