import axios from 'axios';

function getAllReadings() {
    return axios.get('https://geonic-reader-backend.onrender.com/readings/all')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error fetching getting all readings: ', error);
        });
}

function getReadingById(id) {
    return axios.get(`https://geonic-reader-backend.onrender.com/readings/id/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(`Error fetching getting reading by id: ${id} : `, error);
        });
}

function getReadingByCountry(country) {
    return axios.get(`https://geonic-reader-backend.onrender.com/readings/country/${country}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(`Error fetching getting readings by country: ${country} : `, error);
        });
}

export { getAllReadings, getReadingByCountry, getReadingById };