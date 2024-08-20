import axios from 'axios';

function getAllReadings() {
    return axios.get('/api/readings/all')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error fetching getting all readings: ', error);
        });
}

function getReadingById(id) {
    return axios.get(`/api/readings/id/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(`Error fetching getting reading by id: ${id} : `, error);
        });
}

function getReadingByCountry(country) {
    return axios.get(`/api/readings/country/${country}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(`Error fetching getting readings by country: ${country} : `, error);
        });
}

export {getAllReadings, getReadingByCountry, getReadingById};