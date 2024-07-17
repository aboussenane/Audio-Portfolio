import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppChakraProvider from './ChakraProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppChakraProvider>
      <App />
    </AppChakraProvider>
  </React.StrictMode>
);