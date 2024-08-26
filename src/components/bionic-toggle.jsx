import React, { useState } from "react";
import BionicConverter from "./bionic-converter.jsx";

const BionicReader = () => {
    const [numberOfBoldLetters, setNumberOfBoldLetters] = useState(0); // Default: No bold text

    const handleButtonClick = (num) => {
        setNumberOfBoldLetters(num);
    };

    const sampleText = "This is an example of Bionic Reading where some letters are bold.";

    return (
        <div>
            <div>
                <button className="border border-indigo-300 rounded-md px-4 py-2 m-2" 
                onClick={() => handleButtonClick(0)}>No Bold</button>
                <button className="border border-indigo-300 rounded-md px-4 py-2 m-2" 
                onClick={() => handleButtonClick(2)}>Bold First 2 Letters</button>
                <button className="border border-indigo-300 rounded-md px-4 py-2 m-2" 
                onClick={() => handleButtonClick(3)}>Bold First 3 Letters</button>
            </div>
            <div>
                <BionicConverter text={sampleText} numberOfBoldLetters={numberOfBoldLetters} />
            </div>
        </div>
    );
};

export default BionicReader;
