import React from 'react';
import Home from './Home.jsx';
import Catalog from './Catalog.jsx';

function App() {
  return (
    <div className=' mx-12 py-8' >
    
        <nav>
          <ul className="flex space-x-10 justify-center py-8">
            <li><a href="#logo" className="text-blue-500 font-semibold text-2xl">Geonic Reader</a></li>
            <li><a href="#home" className="text-blue-500 font-semibold">Home</a></li>
            <li><a href="#catalog" className="text-blue-500 font-semibold">Catalog</a></li>
            <li><a href="#favorite" className="text-blue-500 font-semibold">Favorite</a></li>
          </ul>
        </nav>
        <div id="home">
          <Home />
        </div>
        <div id="catalog">
          <Catalog />
        </div>
      
    </div>
  );
}

export default App;

