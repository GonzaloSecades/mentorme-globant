import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.scss";
//import App from './components/Landing/Landing';
import {BrowserRouter, Route} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
//import Navbar from "./components/Navbar/Navbar"
import Main from "./Main";
import {Provider} from "react-redux";
import store from './redux/index'
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);

reportWebVitals();