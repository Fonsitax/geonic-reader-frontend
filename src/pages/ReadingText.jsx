import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReadingById } from "../services/readings-service";
import BionicConverter from "../components/bionic-converter.jsx";
import RatingBar from "../components/rating-bar.jsx";
import BionicSettingMenu from "../components/bionic-setting-menu.jsx";
import DrawerComponent from "../components/left-drawer.jsx";


const ReadingText = () => {
    const { id } = useParams();
    const [reading, setReading] = React.useState({});
    const [numberOfBoldLetters, setNumberOfBoldLetters] = React.useState(0); // default value 0 s


    useEffect(() => {
        const fetchReading = async () => {
            const data = await getReadingById(id);
            setReading(data);
        };

        fetchReading();
    }, [id]);


    if (!reading) {
        return <div>Loading...</div>;
    }

    return (

        <div className="container mx-auto p-4 bg-gray-100 rounded-2xl mt-2 hover:shadow-2xl">
            <div className="flex ml-10"> <DrawerComponent/> </div>
            <div className="flex justify-end"><BionicSettingMenu setNumberOfBoldLetters={setNumberOfBoldLetters}/></div>

            <h1 className="text-3xl font-medium mb-4 mt-4 ml-14 text-indigo-900">{reading.title}</h1>
            <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-indigo-800 mr-2 mb-4 mt-4 ml-14">{reading.country}</h2>

            <div className="text-indigo-800 text-lg font-medium mb-5 mt-4 ml-14 mr-14 ">
                <BionicConverter
                    text={reading.description}
                    numberOfBoldLetters={numberOfBoldLetters}/>
            </div>

            <div className="text-indigo-800 text-lg font-medium mb-10 mt-4 ml-14 mr-14 text-justify">
                <BionicConverter
                    text={reading.text}
                    numberOfBoldLetters={numberOfBoldLetters}/>
            </div>

            <div className="flex justify-center items-center mb-10"><RatingBar/></div>
            <div className="flex justify-center items-center"></div>
        </div>
    );
}

export default ReadingText;