import React from "react";

const BionicConverter = ({ text, numberOfBoldLetters }) => {
    if (!text) {
        return <div></div>
    }
    const wordArray = text.split(' ');

    const formatText = wordArray.map((word, index) => {
        const boldLetters = word.slice(0, numberOfBoldLetters);
        const restLetters = word.slice(numberOfBoldLetters);
        return (
            <span key={index}>
                <strong>{boldLetters}</strong>
                {restLetters}{" "}
            </span>
        );
    })

    return <>{formatText}</>
}
export default BionicConverter