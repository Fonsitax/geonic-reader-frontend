import React, { useState } from 'react';
import BionicConverter from './bionic-converter.jsx';
import BoldLetterSetting from './bionicSettings/bold-letter-setting.jsx';

const MyConverter = () => {
    const [userInput, setUserInput] = useState('');
    const [numberOfBoldLetters, setNumberOfBoldLetters] = useState(2); // Default number of bold letters
    const [isVisible, setIsVisible] = useState(false); // State to manage visibility of main content
    const [isPopoverVisible, setPopoverVisible] = useState(false); // State to manage visibility of popover

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleBoldLetterChange = (num) => {
        setNumberOfBoldLetters(num);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const togglePopover = () => {
        setPopoverVisible(!isPopoverVisible);
    };

    const closePopover = () => {
        setPopoverVisible(false);
    };

    return (
        <div>
            <button
                onClick={toggleVisibility}
                className="fixed bottom-4 right-4 p-2 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Toggle Converter"
            >
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z"/>
                </svg>
            </button>

            {isPopoverVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                     onClick={closePopover}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
                         onClick={(e) => e.stopPropagation()}>
                        <p className="text-gray-700">This is a popover text box!</p>
                    </div>
                </div>
            )}

            {isVisible && (
                <main className="p-6 max-w-4xl mx-auto mt-10 mb-10">
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        {/* Text Input Field */}
                        <div className="flex-1 flex flex-col">
                            <label htmlFor="user-input" className="mb-2 text-indigo-700 font-semibold">
                                Enter text:
                            </label>
                            <textarea
                                id="user-input"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Insert your text here..."
                                className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Bionic Converted Text Display */}
                        <div className="flex-1 flex flex-col">
                            <label htmlFor="bionic-text" className="mb-2 text-indigo-700 font-semibold">
                                Bionic text:
                            </label>
                            <div
                                id="bionic-text"
                                className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900"
                            >
                                <BionicConverter text={userInput} numberOfBoldLetters={numberOfBoldLetters}/>
                            </div>
                        </div>
                    </div>

                    {/* Bionic Setting Menu */}
                    <div className="mt-10">
                        <BoldLetterSetting
                            handleChangeBoldLetter={handleBoldLetterChange}
                            preSelection={numberOfBoldLetters}
                        />
                    </div>
                </main>
            )}
        </div>
    );
};

export default MyConverter;
