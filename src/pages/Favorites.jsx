import React, { useEffect, useState } from "react";
import ReadingCard from "../components/reading-card.jsx";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('info'); // info, success, error

    useEffect(() => {
        try {
            const favoriteReadings = JSON.parse(localStorage.getItem('favoriteReadings')) || [];
            setFavorites(favoriteReadings);
        } catch (error) {
            console.error("Failed to retrieve favorites from localStorage", error);
        }
    }, []);

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => setShowAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const handleRemoveReading = (id) => {
        const readingToRemove = favorites.find((reading) => reading.id === id);
        if (readingToRemove) {
            const newFavorites = favorites.filter((reading) => reading.id !== id);
            setFavorites(newFavorites);
            localStorage.setItem('favoriteReadings', JSON.stringify(newFavorites));
            
            setTimeout(() => {
                setAlertMessage(`${readingToRemove.title} has been removed from your favorites.`);
                setAlertType('error');
                setShowAlert(true);  
            }, 0);    
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Alert Message */}
            {showAlert && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    role="alert"
                >
                    <div
                        className={`max-w-lg w-full p-6 text-white border rounded-lg shadow-lg ${alertType === 'success' ? 'bg-green-500 border-green-600' : alertType === 'error' ? 'bg-red-500 border-red-600' : 'bg-blue-500 border-blue-600'}`}
                    >
                        <div className="flex items-start space-x-4">
                            <svg
                                className={`w-8 h-8 ${alertType === 'success' ? 'text-green-200' : alertType === 'error' ? 'text-red-200' : 'text-blue-200'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d={alertType === 'success'
                                    ? "M10 .5a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 10 .5ZM8.293 6.293a1 1 0 0 1 1.414 0L10 6.586l.293-.293a1 1 0 0 1 1.414 1.414L10 9.414l-2.707-2.707a1 1 0 0 1 0-1.414ZM10 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                    : alertType === 'error'
                                    ? "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                                    : "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                                }/>
                            </svg>
                            <div>
                                <span className="font-medium">
                                    {alertType === 'success' ? 'Success!' : alertType === 'error' ? 'Error!' : 'Info!'}
                                </span>
                                <p className="mt-1">{alertMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow mt-48 mb-20">
                {/* Quote Section */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <figure>
                        <svg
                            className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>
                        </svg>
                        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                            <p>“Our favorite readings are like windows to the world, offering a glimpse into the wonders of geography and the richness of our global heritage.”</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Gough"/>
                            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Geography Enthusiast</cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                {/* Horizontal Line Below the Quote */}
                <hr className="border-t border-gray-300 dark:border-gray-700 my-8 mx-auto max-w-4xl"/>

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
