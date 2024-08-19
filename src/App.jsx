import React from "react";
import AppHeader from './components/app-header.jsx';
import Home from './components/home.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <AppHeader />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Home />} />
      <Route path="/favorited" element={<Home />} />
    </Routes>
  </Router>
    
  );
}

export default App;