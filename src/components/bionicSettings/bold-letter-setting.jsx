import React from "react";


const BoldLetterSetting = ({ handleChangeBoldLetter, preSelection }) => {
    const [selectedButtton, setSelectedButtton] = React.useState(preSelection ? preSelection : 0);
    const handleButtonClick = (num) => {
        setSelectedButtton(num);
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
            <h1 className="text-center text-sm font-medium mb-4">Bionic Fixation</h1>
            <div className="border-indigo-200 flex space-x-6 justify-center ">

                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`${index === selectedButtton ? 'bg-indigo-300' : 'bg-indigo-700'} hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full w-10 h-10`}
                        onClick={() => handleButtonClick(button.numberBold)}>{button.numberBold}
                    </button>
                ))
                }
            </div>


        </div>
    );
};

export default BoldLetterSetting;


