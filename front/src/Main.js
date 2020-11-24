import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
//STYLES
import "./assets/index.scss";
//COMPONENTS
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/Register/UserForm";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import MyProfile from "./components/MyProfile/MyProfile";

function Main() {
  const location = useLocation().pathname;
  return (
    <div className="order">
      {location === "/" ? null : <Navbar />}
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={UserForm}></Route>
          <Route path="/myprofile" component={MyProfile} />
        </Switch>
      </div>

      {location === "/" ? null : <Menu />}
    </div>
  );
}

export default Main;
