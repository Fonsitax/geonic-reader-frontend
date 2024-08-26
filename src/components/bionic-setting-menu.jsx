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
                <button onClick={() => handleButtonClick(0)}>No Bold</button>
                <button onClick={() => handleButtonClick(1)}>Bold First Letter</button>
                <button onClick={() => handleButtonClick(3)}>Bold First 3 Letters</button>
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


