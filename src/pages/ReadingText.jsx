import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReadingById } from "../services/readings-service";
import BionicConverter from "../components/bionic-converter.jsx";
import DrawerComponent from "../components/left-drawer.jsx";
import FloatingMenu from "../components/right-drawer.jsx";

const ReadingText = () => {
  const { id } = useParams();
  const [reading, setReading] = useState(null); // Set initial state to null
  const [numberOfBoldLetters, setNumberOfBoldLetters] = useState(2);
  const [textColorClass, setTextColorClass] = useState("text-indigo-800");
  const [themeColorClass, setThemeColorClass] = useState("bg-gray-50");
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const fetchReading = async () => {
      try {
        const data = await getReadingById(id);
        setReading(data);
      } catch (error) {
        console.error("Failed to fetch reading", error);
        setReading({});
      }
    };

    fetchReading();
  }, [id]);

  const handleChangeBoldLetter = (newNumberBoldLetter) => {
    setNumberOfBoldLetters(newNumberBoldLetter);
  };

  const handleChangeTextColor = (newTextColor) => {
    setTextColorClass(newTextColor);
  };

  const handleChangeThemeColor = (newThemeColor) => {
    setThemeColorClass(newThemeColor);
  };

  const handleChangeFontSize = (newFontSize) => {
    setFontSize(newFontSize);
  };

  if (reading === null) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (Object.keys(reading).length === 0) {
    return <div className="text-center mt-20">No data available.</div>;
  }

  return (
    <div
      className={`${themeColorClass} ${textColorClass} mt-48 mb-20 border-2 border-indigo-900 container mx-auto p-4 rounded-2xl max-w-screen-lg`}
    >
      <div className="flex flex-col md:flex-row justify-end items-start md:ml-auto">
        <DrawerComponent reading={reading} />
        <FloatingMenu
          handleChangeBoldLetter={handleChangeBoldLetter}
          handleChangeTextColor={handleChangeTextColor}
          handleChangeThemeColor={handleChangeThemeColor}
          handleChangeFontSize={handleChangeFontSize}
          preSelectionBoldLetter={numberOfBoldLetters}
        />
      </div>

      <div className="text-lg leading-loose mx-auto sm:mx-14 text-left mt-10">
        <h2
          style={{ fontSize: `${fontSize - 4}px` }}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold mb-11"
        >
          {reading.country || "Unknown Country"}
        </h2>
        <h1 style={{ fontSize: `${fontSize + 6}px` }} className="font-medium">
          {reading.title || "Untitled"}
        </h1>
      </div>

      <div
        style={{ fontSize: `${fontSize}px`, whiteSpace: "pre-wrap" }}
        className="text-justify"
      >
        <div className="leading-loose mb-5 mt-10 mx-auto sm:mx-14">
          <BionicConverter
            text={reading.description || ""}
            numberOfBoldLetters={numberOfBoldLetters}
          />
        </div>

        <div className="leading-loose mx-auto sm:mx-14 mb-24">
          <BionicConverter
            text={reading.text || ""}
            numberOfBoldLetters={numberOfBoldLetters}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadingText;
