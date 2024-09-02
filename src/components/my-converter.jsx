import React from 'react';
import AppHeader from './app-header.jsx'; 
import BionicConverter from './bionic-converter.jsx'; 
import BoldLetterSetting from './bionicSettings/bold-letter-setting.jsx';
import { useState } from 'react';

const MyConverter = () => {
    const [userInput, setUserInput] = useState('');
    const [numberOfBoldLetters, setNumberOfBoldLetters] = useState(2); // Default number of bold letters

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleBoldLetterChange = (num) => {
        setNumberOfBoldLetters(num);
    };

    return (
        <div>
            <main className="p-6 max-w-4xl mx-auto">
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
                            placeholder="Type your text here..."
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
                            <BionicConverter text={userInput} numberOfBoldLetters={numberOfBoldLetters} />
                        </div>
                    </div>
                </div>

                {/* Bionic Setting Menu */}
                <div className="mt-10">
                    <BoldLetterSetting handleChangeBoldLetter={handleBoldLetterChange} />
                </div>
            </main>
        </div>
    );
};

export default MyConverter;
