import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReadingById } from "../services/readings-service";
import BionicConverter from "../components/bionic-converter.jsx";
import DrawerComponent from "../components/left-drawer.jsx";
import RightDrawer from "../components/right-drawer.jsx";


const ReadingText = () => {
    const { id } = useParams();
    const [reading, setReading] = React.useState({});
    const [numberOfBoldLetters, setNumberOfBoldLetters] = React.useState(0); // default value 0 s
    const [textColorClass, setTextColorClass] = React.useState('text-indigo-800'); // default value 0 s
    const [themeColorClass, setThemeColorClass] = React.useState('bg-gray-50');


    useEffect(() => {
        const fetchReading = async () => {
            const data = await getReadingById(id);
            setReading(data);
        };

        fetchReading();
    }, [id]);


    const handleChangeBoldLetter = (newNumberBoldLetter) => {
        setNumberOfBoldLetters(newNumberBoldLetter);
    }

    const handleChangeTextColor = (newTextColor) => {
        setTextColorClass(newTextColor);
    }

    const handleChangeThemeColor = (newThemeColor) => {
        setThemeColorClass(newThemeColor);
    }


    if (!reading) {
        return <div>Loading...</div>;
    }

    return (

        <div
            className={`${themeColorClass} ${textColorClass} container mx-auto p-4  rounded-2xl mt-2 hover:shadow-2xl w-[800px]`}>
            <div className="flex ml-10"><DrawerComponent reading={reading}/></div>
            <div className="flex ml-10">
                <RightDrawer
                    handleChangeBoldLetter={handleChangeBoldLetter}
                    handleChangeTextColor={handleChangeTextColor}
                    handleChangeThemeColor={handleChangeThemeColor}
                />
            </div>

            <h1 className={` text-3xl font-medium mb-4 mt-4 ml-14 `}>
                {reading.title}
            </h1>
            <h2 className={` inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-4 mt-4 ml-14`}>
                {reading.country}
            </h2>

            <div className={`text-lg  mb-5 mt-4 ml-14 mr-14 text-justify`}>
                <BionicConverter
                    text={reading.description}
                    numberOfBoldLetters={numberOfBoldLetters}/>
            </div>

            <div className={` text-lg  mb-5 mt-4 ml-14 mr-14 text-justify`}>
                <BionicConverter
                    text={reading.text}
                    numberOfBoldLetters={numberOfBoldLetters}/>
            </div>


            <div className="flex justify-center items-center"></div>
        </div>
    );
}

export default ReadingText;
