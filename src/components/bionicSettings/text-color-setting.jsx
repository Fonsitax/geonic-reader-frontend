import React from "react";

const TextColorSetting = ({ handleChangeTextColor }) => {
  const [selectedButtton, setSelectedButtton] = React.useState(0);

  const buttons = [
    {
      gradient: "from-blue-900 via-blue-900 to-blue-900",
      ring: "focus:ring-blue-300 dark:focus:ring-blue-800",
      textColorClass: "text-blue-900",
    },
    {
      gradient: "from-cyan-900 via-cyan-900 to-cyan-900",
      ring: "focus:ring-cyan-300 dark:focus:ring-cyan-800",
      textColorClass: "text-cyan-600",
    },
    {
      gradient: "from-gray-300 via-gray-300 to-gray-300",
      ring: "focus:ring-gray-100 dark:focus:ring-gray-100",
      textColorClass: "text-gray-300",
    },
    {
      gradient: "from-lime-600 via-lime-600 to-lime-600",
      ring: "focus:ring-lime-300 dark:focus:ring-lime-800",
      textColorClass: "text-lime-600",
    },

    {
      gradient: "from-pink-500 via-pink-500 to-pink-500",
      ring: "focus:ring-pink-300 dark:focus:ring-pink-800",
      textColorClass: "text-pink-500",
    },
    {
      gradient: "from-purple-500 via-purple-500 to-purple-500",
      ring: "focus:ring-purple-300 dark:focus:ring-purple-800",
      textColorClass: "text-purple-600",
    },
  ];

  const handleOnClick = (textColorClass, index) => {
    setSelectedButtton(index);
    handleChangeTextColor(textColorClass);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-center text-sm font-medium mb-4">Font Color</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${
              button.gradient
            } hover:bg-gradient-to-br focus:ring-2 focus:outline-none ${
              button.ring
            } ${
              index === selectedButtton
                ? "ring-4 ring-indigo-500 scale-105"
                : ""
            } transition-transform duration-200`}
            onClick={() => handleOnClick(button.textColorClass, index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TextColorSetting;
