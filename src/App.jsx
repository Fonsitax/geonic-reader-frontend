import React from "react";
import AppHeader from './components/app-header.jsx';
import AppFooter from './components/app-footer.jsx';
import Readings from './components/readings.jsx';
import ReadingText from "./pages/ReadingText.jsx";
import Home from './components/home.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <AppHeader />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/readings" element={<Readings />} />
              <Route path="/reading/:id" element={<ReadingText />} />
              <Route path="/favorited" element={<Home />} />
          </Routes>
      <AppFooter />
    </Router>
    </div>
  );
}

export default App;