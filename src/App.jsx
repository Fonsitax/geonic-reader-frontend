import React, { useState } from "react";
import AppHeader from "./components/app-header.jsx";
import AppFooter from "./components/app-footer.jsx";
import Readings from "./pages/Readings.jsx";
import Favorites from "./pages/Favorites.jsx";
import ReadingText from "./pages/ReadingText.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyConverter from "./components/my-converter.jsx";
import FAQSection from "./components/homePage/question-ask-section.jsx";
import HeroSection from "./components/homePage/hero-section.jsx";
import Alert from "./components/Alert.jsx";

const App = () => {
  const [showAlert, setShowAlert] = useState(true); // State for the alert visibility

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        {/* Conditionally render the Alert component */}
        {showAlert && (
          <Alert
            message="Loading the readings might take a few seconds due to the free database version."
            onClose={() => setShowAlert(false)} // Close alert when button is clicked
          />
        )}
      </div>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readings" element={<Readings />} />
          <Route path="/readings/:search" element={<Readings />} />
          <Route path="/reading/:id" element={<ReadingText />} />
          <Route path="/favorited" element={<Favorites />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/myconverter" element={<MyConverter />} />
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <AppFooter />
      </Router>
    </div>
  );
};

export default App;
