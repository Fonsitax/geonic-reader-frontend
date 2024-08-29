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
  
        <div className={`${themeColorClass} ${textColorClass} container mx-auto p-4 rounded-2xl mt-2 max-w-screen-lg`}>
          
            <div className="flex flex-col md:flex-row">    
                <div>
                    
                    <RightDrawer
                        handleChangeBoldLetter={handleChangeBoldLetter}
                        handleChangeTextColor={handleChangeTextColor}
                        handleChangeThemeColor={handleChangeThemeColor}
                    />
                </div>
            </div>


            <div className="ml-10">
                <h1 className="text-3xl font-medium mb-4 mt-4 text-center md:text-left">
                    {reading.title}
                </h1>


                <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mb-4 md:text-left">
                    {reading.country}
                </h2>
                
                <div className="md:w-1/4 p-4">
                    <DrawerComponent reading={reading} />
                </div>
            </div>

            

            <div className="text-lg leading-loose mb-5 mt-4 mx-auto sm:mx-14 text-left">
                <BionicConverter
                    text={reading.description}
                    numberOfBoldLetters={numberOfBoldLetters}
                />
            </div>

            <div className="text-lg leading-loose mb-5 mt-4 mx-auto sm:mx-14 text-left">
                <BionicConverter
                    text={reading.text}
                    numberOfBoldLetters={numberOfBoldLetters}
                />
            </div>
        </div>
    );
}

export default ReadingText;
