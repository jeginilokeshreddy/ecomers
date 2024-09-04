import React from 'react';
import ReactDOM from 'react-dom/client';
//------------------bootstrap links
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//-----------------external css file
import './index.css';
//---------------external componets
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//--------------------external icons



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
