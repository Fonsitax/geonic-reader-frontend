import React from "react";


const BoldLetterSetting = ({ handleChangeBoldLetter }) => {
    const handleButtonClick = (num) => {
        handleChangeBoldLetter(num);
    };

    const buttons = [
        { numberBold: 0 },
        { numberBold: 1 },
        { numberBold: 2 },
        { numberBold: 3 }
    ];

    return (
        <div>
            <div className=" border-black rounded-l flex space-x-4 ">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => handleButtonClick(button.numberBold)}>{button.numberBold}
                    </button>
                ))
                }
            </div>


        </div>
    );
};

export default BoldLetterSetting;


