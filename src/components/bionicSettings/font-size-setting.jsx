import React from "react";

const MAX_FONT_SIZE = 54;
const MIN_FONT_SIZE = 10;

const FontSizeSetting = ({ handleChangeFontSize }) => {
  const [fontSize, setFontSize] = React.useState(16);

  const decreaseFontSize = () => {
    setFontSize((prevSize) => {
      if (prevSize > MIN_FONT_SIZE) {
        return prevSize - 2;
      }
      return prevSize;
    });
    handleChangeFontSize(fontSize);
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => {
      if (prevSize < MAX_FONT_SIZE) {
        return prevSize + 2;
      }
      return prevSize;
    });
    handleChangeFontSize(fontSize);
  };

  return (
    <div>
      <h1 className="text-center text-sm font-medium mb-4">Font Size</h1>

      <div className="space-x-1 text-center ">
        <button
          disabled={fontSize <= MIN_FONT_SIZE}
          onClick={decreaseFontSize}
          className={`p-1 rounded-l-full w-12 ${
            fontSize <= MIN_FONT_SIZE
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          &#8722; {/* Minus-Zeichen */}
        </button>
        <button
          disabled={fontSize >= MAX_FONT_SIZE}
          onClick={increaseFontSize}
          className={`p-1 rounded-r-full w-12 ${
            fontSize >= MAX_FONT_SIZE
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          &#43; {/* Plus-Zeichen */}
        </button>
      </div>
    </div>
  );
};

export default FontSizeSetting;
