import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyProvider } from './context/MyContext'


// Create a root and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
)
