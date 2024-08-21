import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReadingById } from "../services/readings-service";

const ReadingText = () => {
    const {id} = useParams();
    const [reading, setReading] = React.useState({});

    useEffect(() => {
        const fetchReading = async () => {
            const data = await getReadingById(id);
            setReading(data);
        };

        fetchReading();
    }, [id]);

    if (!reading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 bg-white rounded-2xl mt-2">
            <img src={reading.image_url} alt={reading.title} />
            <h1 className="text-3xl font-bold mb-4 mt-4 ml-14 text-indigo-900">{reading.title}</h1>
            <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-indigo-800 mr-2 mb-4 mt-4 ml-14">{reading.country}</h2>
            <p className="text-indigo-800 text-lg mb-5 mt-4 ml-14 mr-14">{reading.description}</p>
            <p className="text-indigo-800 text-lg mb-4 mt-4 ml-14 mr-14 text-justify" >{reading.text}</p>
        </div>
    );
}

export default ReadingText;