import React from "react";

const BionicConverter = ({ text, numberOfBoldLetters }) => {
    if (!text) {
        return <div></div>
    }
    const wordArray = text.split(/(\s+)/);

    const formatText = wordArray.map((word, index) => {

            if (word.includes('\n\n')) {
                return <p key={index} className="mb-6"></p>;
            } else if (word.includes('\n')) {
                return <p key={index}></p>;
            } else if (word.trim().length > 0) {
                const boldLetters = word.slice(0, numberOfBoldLetters);
                const restLetters = word.slice(numberOfBoldLetters);
                return (
                    <span key={index}>
                <strong>{boldLetters}</strong>
                        {restLetters}{" "}
            </span>
                );
            }
        }
    )

    return <>{formatText}</>
}
export default BionicConverter