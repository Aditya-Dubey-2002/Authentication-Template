import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change here
import App from './App';
import './index.css'; // Ensure this line is present


// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
