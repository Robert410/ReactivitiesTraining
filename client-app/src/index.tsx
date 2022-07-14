import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/Layout/index.css';
import App from './app/Layout/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

reportWebVitals();
