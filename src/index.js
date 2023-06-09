import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom"
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.baseURL = 'https://concerned-robe-frog.cyclic.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
