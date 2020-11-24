import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
//import App from './components/Landing/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import Navbar from "./components/Navbar/Navbar"
import Main from "./Main"

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();