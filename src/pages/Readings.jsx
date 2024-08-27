import React, { useEffect } from "react";
import { getAllReadings, getReadingByCountry } from "../services/readings-service";
import ReadingCard from "../components/reading-card.jsx";
import { useParams } from "react-router-dom";

const Readings = () => {
    const [readings, setReadings] = React.useState([]);
    const { search } = useParams();

    useEffect(() => {
        const fetchReadings = async () => {
            let readings;
            if (search !== undefined) {
                readings = await getReadingByCountry(search);

            } else {
                readings = await getAllReadings();
            }
            setReadings(readings);
        };

        fetchReadings();
    }, [search]);


    const addToFavorites = (id) => {
        console.log('Add to favorites:', id);
        const favoriteReadings = JSON.parse(localStorage.getItem('favoriteReadings')) || [];
        const reading = readings.find(r => r.id === id);

        if (reading && !favoriteReadings.some(fav => fav.id === id)) {
            favoriteReadings.push(reading);
            localStorage.setItem('favoriteReadings', JSON.stringify(favoriteReadings));
            alert(`${reading.title} has been added to your favorites!`);
        } else {
            alert(`${reading.title} is already in your favorites!`);
        }
    };

    if (readings.length === 0) {
        return (
            <div>No Readings found!</div>
        )
    }

    return (
        <div
            className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {readings.map((reading) => (
                <ReadingCard
                    key={reading.id}
                    id={reading.id}                         // Pass the id to the ReadingCard
                    image={reading.image_url}                // Pass the image_url to the ReadingCard
                    country={reading.country}
                    title={reading.title}
                    onFavorite={addToFavorites}             // Pass the addToFavorites function to the ReadingCard
                    hideButtons={false}
                />
            ))}
        </div>
    );
}

export default Readings;