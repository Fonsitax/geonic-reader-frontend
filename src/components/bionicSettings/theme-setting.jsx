import React from "react";

const ThemeSetting = ({ handleChangeThemeColor }) => {
  const [selectedButtton, setSelectedButtton] = React.useState(0);

  const handleOnClick = (themeColor, index) => {
    setSelectedButtton(index);
    handleChangeThemeColor(themeColor);
  };

  const buttons = [
    { class: "bg-gray-50", hover: "hover:bg-gray-50" },
    { class: "bg-gray-200", hover: "hover:bg-gray-200" },

    { class: "bg-gray-500", hover: "hover:bg-gray-500" },
  ];

  return (
    <div>
      <h1 className="text-center text-sm font-medium mb-4">Paper Color</h1>
      <div className=" border-black rounded-l flex space-x-2 justify-center ">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`${btn.class} ${
              btn.hover
            } text-white font-bold py-2 px-4 w-10 h-10 border-2 ${
              index === selectedButtton ? "ring-2" : ""
            }`}
            onClick={() => handleOnClick(btn.class, index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSetting;
