import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
//STYLES
import "./assets/index.scss";
//COMPONENTS
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/Register/UserForm";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import MyProfile from "./components/MyProfile/MyProfile";
import MyProfileContainer from './components/MyProfile/MyProfileContainer'
import {me} from './redux/action-creators/currentUser'

function Main() {
  const dispatch = useDispatch()
  const location = useLocation().pathname;

  //HOOK PERSISTENCIA DE SESION
  React.useEffect(() => {
    if (document.cookie) {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token'))
        .split('=')[1];
      dispatch(me(token))
    }
  }, [])


  return (
    <div className="order">
      {location === "/" ? null : <Navbar />}
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={UserForm}></Route>
          <Route path="/myprofile" component={MyProfileContainer} />
        </Switch>
      </div>
      {location === "/" || "/register" ? null : <Menu />}
    </div>
  );
}

export default Main;
