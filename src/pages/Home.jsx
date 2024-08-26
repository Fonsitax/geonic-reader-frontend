import SearchBar from '../components/search-bar.jsx';
import BionicReader from '../components/bionic-toggle.jsx';
import React, { useState } from "react";


const Home = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold">Home Component</h2>
            <p>Welcome to the Home page!</p>
            <div>
                <h1>
                    <SearchBar/>
                </h1>
                <div> 
                    <BionicReader />
                </div>
            </div>
        </div>
    );

};

export default Home;
