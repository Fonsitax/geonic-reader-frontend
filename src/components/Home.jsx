import React from 'react';
import { Link } from 'react-router-dom';
import { getAllReadings } from '../services/readings-service';



const Home = () => {

  function onTest() {  
    getAllReadings();
    console.log('onTest1');
  }


  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Home Component</h2>
      <p>Welcome to the Home page!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onTest}>TEST</button>
    </div>
  );
};

export default Home;
