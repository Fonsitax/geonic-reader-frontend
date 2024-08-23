import React, { useEffect } from "react";
import ReadingCard from "../components/Reading-card";

const Favorites = () => {
    const [favorites, setFavorites] = React.useState([]);

    useEffect(() => {
        const favoriteReadings = JSON.parse(localStorage.getItem('favoriteReadings')) || [];
        setFavorites(favoriteReadings);
    }, []);

    const handleRemoveReading = (id) => {
        const newFavorites = favorites.filter((reading) => reading.id !== id);
        setFavorites(newFavorites);
    }

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.length > 0 ? (
                favorites.map((reading) => (
                    <ReadingCard
                        key={reading.id}
                        id={reading.id}
                        image={reading.image_url}
                        country={reading.country}
                        title={reading.title}
                        description={reading.description}
                        text={reading.text}
                        onRemoveFavorite={handleRemoveReading}
                    />
                ))
            ) : (
                <p>No favorites added yet.</p>
            )}
        </div>
    );
}

export default Favorites;