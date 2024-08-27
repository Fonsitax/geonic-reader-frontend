import SearchBar from '../components/search-bar.jsx';
import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const handleSearch = (searchInput) => {
        const path = `/readings/${searchInput}`;
        navigate(path);
    }

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold">Home Component</h2>
            <p>Welcome to the Home page!</p>
            <div>
                <h1>
                    <SearchBar onSearch={handleSearch}/>
                </h1>

            </div>
        </div>
    );

};

export default Home;
