import React, { useState, useEffect } from "react";
import BionicConverter from "./bionic-converter.jsx";


const BionicSettingMenu = ({ setNumberOfBoldLetters }) => {
    // const [numberOfBoldLetters, setNumberOfBoldLetters] = useState(0, 2, 3);
    // const [reading, setReading] = React.useState({});


    const handleButtonClick = (num) => {
        setNumberOfBoldLetters(num);
    };

    // const sampleText = `${reading.description} ${reading.text}`;

    return (
        <div>
            <div>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleButtonClick(0)}>Default</button>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleButtonClick(2)}>Bold First 2 Letters</button>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleButtonClick(3)}>Bold First 3 Letters</button>
            </div>
            {/*<div>*/}
            {/*    <BionicConverter*/}
            {/*        text={text}*/}
            {/*        numberOfBoldLetters={numberOfBoldLetters}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default BionicSettingMenu;


