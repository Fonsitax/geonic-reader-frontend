import React, { useState } from "react";
import {
  getAllReadings,
  getReadingByCountry,
} from "../services/readings-service";
import ReadingCard from "../components/reading-card.jsx";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/search-bar.jsx";
import Alert from "../components/Alert.jsx";

const Readings = () => {
  const [readings, setReadings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [showAlert, setShowAlert] = useState(true);
  // const [showAlert, setShowAlert] = React.useState(false);
  // const [alertMessage, setAlertMessage] = React.useState('');
  // const [alertType, setAlertType] = React.useState('info'); // info, success, error
  const { search } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchReadings = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedReadings =
          search !== undefined
            ? await getReadingByCountry(search)
            : await getAllReadings();
        setReadings(fetchedReadings);
      } catch (err) {
        setError("Failed to load readings.");
      } finally {
        setLoading(false);
      }
    };

    fetchReadings();
  }, [search]);

  const handleSearch = (searchInput) => {
    const path = `/readings/${searchInput}`;
    navigate(path);
  };

  const displayAlert = (message, type) => {
    // setAlertMessage(message);
    // setAlertType(type);
    // setShowAlert(true);
    // setTimeout(() => setShowAlert(false), 3000);
  };

  const addToFavorites = (id) => {
    console.log("Add to favorites:", id);
    const favoriteReadings =
      JSON.parse(localStorage.getItem("favoriteReadings")) || []; // Retrieve the favorite readings from local storage
    const reading = readings.find((r) => r.id === id); // Find the reading by id

    if (reading) {
      // If the reading is found
      const isAlreadyFavorite = favoriteReadings.some((fav) => fav.id === id); // Check if the reading is already in the favorites list
      if (!isAlreadyFavorite) {
        favoriteReadings.push(reading);
        localStorage.setItem(
          "favoriteReadings",
          JSON.stringify(favoriteReadings)
        );
        displayAlert(
          `${reading.title} has been added to your favorites!`,
          "success"
        );
      } else {
        displayAlert(`${reading.title} is already in your favorites!`, "info");
      }
    }
  };

  const removeFromFavorites = (id) => {
    console.log("Remove from favorites:", id);
    const favoriteReadings =
      JSON.parse(localStorage.getItem("favoriteReadings")) || [];
    const newFavorites = favoriteReadings.filter(
      (reading) => reading.id !== id
    );
    localStorage.setItem("favoriteReadings", JSON.stringify(newFavorites));

    const removeReading = readings.find((r) => r.id === id);
    if (removeReading) {
      setTimeout(() => {
        displayAlert(
          `${removeReading.title} has been removed from your favorites!`,
          "error"
        );
      }, 0); // 0 ms delay allows the state to update before showing the alert
    }
  };

  // React.useEffect(() => {
  //     // Hide the alert automatically if it's shown
  //     if (showAlert) {
  //         const timer = setTimeout(() => setShowAlert(false), 3000);
  //         return () => clearTimeout(timer);
  //     }
  // }, [showAlert]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center">
          <SearchBar onSearch={handleSearch} />
          <div role="status" className="flex items-center justify-center mt-4">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Alert Message */}
      <div>
        {/* Conditionally render the Alert component */}
        {showAlert && (
          <Alert
            message="Loading the readings might take a few seconds due to the free database version.
            Thank you for your patience!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
      {/* showAlert && (
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
                                    ? "M10 1.5a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 10 1.5ZM8.293 6.293a1 1 0 0 1 1.414 0L10 6.586l.293-.293a1 1 0 0 1 1.414 1.414L10 9.414l-2.707-2.707a1 1 0 0 1 0-1.414ZM10 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                    : alertType === 'error'
                                    ? "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                                    : "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                                }/>
                            </svg>
                            <div>
                                <span className="font-medium">
                                    {alertType === 'success' ? 'Success!' : alertType === 'error' ? 'Error!' : 'Info!'}
                                </span> {alertMessage}
                            </div>
                        </div>
                    </div>
                </div>
            ) */}

      <div className="mt-48">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {readings?.length > 0 ? (
          readings.map((reading) => (
            <ReadingCard
              key={reading.id}
              id={reading.id}
              image={reading.image_url}
              country={reading.country}
              title={reading.title}
              onFavorite={addToFavorites}
              onRemoveFavorite={removeFromFavorites}
              hideButtons={false}
            />
          ))
        ) : (
          <div className=" mb-52 text-center col-span-full text-gray-500">
            No readings found
          </div>
        )}
      </div>
    </div>
  );
};

export default Readings;
