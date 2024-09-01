import React, { useEffect, useState } from "react";
import ReadingCard from "../components/reading-card.jsx";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const favoriteReadings = JSON.parse(localStorage.getItem('favoriteReadings')) || [];
        setFavorites(favoriteReadings);
    }, []);

    const handleRemoveReading = (id) => {
        const newFavorites = favorites.filter((reading) => reading.id !== id);
        setFavorites(newFavorites);
        localStorage.setItem('favoriteReadings', JSON.stringify(newFavorites));
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Alert Message */}
            {showAlert && (
                <div className="fixed top-16 right-4 max-w-xs p-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 z-50" role="alert">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span className="text-lg font-medium">Welcome to Your Favorites! You are now viewing your favorite readings.</span>
                        </div>
                        <button onClick={handleCloseAlert} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l12 12M1 13L13 1"/>
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow mt-48">
                {/* Quote Section */}
                <div className="max-w-4xl mx-auto text-center mb-6">
                    <figure>
                        <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>
                        </svg>
                        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                            <p>“Our favorite readings are like windows to the world, offering a glimpse into the wonders of geography and the richness of our global heritage.”</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Geography Enthusiast</cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                {/* Horizontal Line Below the Quote */}
                <hr className="border-t border-gray-300 dark:border-gray-700 my-6 mx-auto max-w-4xl"/>

                {/* Favorites Grid */}
                <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {favorites.length > 0 ? (
                        favorites.map((reading) => (
                            <ReadingCard
                                key={reading.id}
                                id={reading.id}
                                image={reading.image_url}
                                country={reading.country}
                                title={reading.title}
                                onRemoveFavorite={handleRemoveReading}
                                hideButtons={false}
                            />
                        ))
                    ) : (
                        <div className="text-center col-span-full">
                            <p className="text-lg text-gray-500 dark:text-gray-400">No favorites added yet.</p>
                        </div>
                    )}
                </div>
            </main>       
        </div>
    );
}

export default Favorites;
