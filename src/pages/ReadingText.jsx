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
  
        <div className={`${themeColorClass} ${textColorClass} mt-48 container mx-auto p-4 rounded-2xl max-w-screen-lg`}>
         
            <div className="flex flex-col md:flex-row justify-end items-start md:ml-auto m">    
                <div>
                    <DrawerComponent reading={reading} />
                </div>
                <div>
                    <RightDrawer
                        handleChangeBoldLetter={handleChangeBoldLetter}
                        handleChangeTextColor={handleChangeTextColor}
                        handleChangeThemeColor={handleChangeThemeColor}
                    />
                </div>
            </div>


            <div className="text-lg leading-loose mx-auto sm:mx-14 text-left mt-20">
                <h1 className="text-3xl font-medium">
                    {reading.title}
                </h1>
                <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mt-8">
                    {reading.country}
                </h2>             
            </div>

            

            <div className="text-lg leading-loose mb-5 mt-10 mx-auto sm:mx-14 text-left">
                <BionicConverter
                    text={reading.description}
                    numberOfBoldLetters={numberOfBoldLetters}
                />
            </div>

            <div className="text-lg leading-loose mx-auto sm:mx-14 text-left mb-24">
                <BionicConverter
                    text={reading.text}
                    numberOfBoldLetters={numberOfBoldLetters}
                />
            </div>
        </div>
    );
}

export default ReadingText;
