import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllReadings } from "../services/readings-service";

const ReadingText = () => {
    const {id} = useParams();
    const [reading, setReading] = React.useState({});

    useEffect(() => {
        const fetchReading = async () => {
            const data = await getAllReadings();
            const selectedReading = data.find((reading) => reading.id === id);
            setReading(selectedReading);
        };

        fetchReading();
    }, [id]);

    if (!reading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <img src={reading.image} alt={reading.title} />
            <h1 className="text-3xl font-bold mb-4">{reading.title}</h1>
            <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{reading.country}</h2>
            <p className="text-gray-600 text-lg mt-4">{reading.description}</p>
            <p className="text-gray-800 text-base mt-4" >{reading.text}</p>
        </div>
    );
}

export default ReadingText;