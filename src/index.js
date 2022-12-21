import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Example from "./homework";
import Count from "./homework";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Count/>
  </React.StrictMode>
);
