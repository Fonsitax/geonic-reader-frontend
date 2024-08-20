import { useState } from 'react';
import axios from 'axios';

function getAllReadings() {
    const [data, setData] = useState(null);

    console.log('getAllReadings');
    axios.get('/readings')
        .then((response) => {
            console.log('response: ', response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching getting all readings: ', error);
        });
    console.log(data);
}
/*
function getReadingById(id) {
  return axios.get(`/readings/${id}`);
}

function getReadingByCountry(country) {
  return axios.get(`/readings/country/${country}`);
}
*/

export { getAllReadings };