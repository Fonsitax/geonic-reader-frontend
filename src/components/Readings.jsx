import React, { useEffect } from "react";
import { getAllReadings } from "../services/readings-service";
import ReadingCard from "./Reading-card";

const Readings = () => {
    const [readings, setReadings] = React.useState([]);

    useEffect(() => {
        const fetchReadings = async () => {
            const readings = await getAllReadings();
            setReadings(readings);
        };

        fetchReadings();
    } , []);    

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {readings.map((reading) => (
                <ReadingCard
                    key={reading.id}
                    id={reading.id}                         // Pass the id to the ReadingCard
                    image={reading.image}
                    country={reading.country}
                    title={reading.title}
                    description={reading.description}
                    text={reading.text}
                />
            ))}
        </div>
    );
}

export default Readings;