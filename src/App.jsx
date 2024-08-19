import React from "react";
import Header from './components/Header.jsx';
import './index.css';
import { MyProvider } from './context/MyContext.jsx';

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;