import React from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//STYLES
import "./assets/index.scss";
//COMPONENTS
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/Register/UserForm";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import MyProfile from "./components/MyProfile/MyProfile";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import { me } from "./redux/action-creators/currentUser";

function Main() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const history = useHistory();
  //HOOK PERSISTENCIA DE SESION
  useEffect(() => {
    //persistencia
    if (document.cookie) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token"))
        .split("=")[1];
      dispatch(me(token));

      //transition
      /*   .then(() => {
          setTimeout(() => {
            history.push("/myprofile")
          }, 1000);
        }) */
    } /* else {
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } */

    },[]);

  return (
    <div className="order">
      {location === "/" ? null : <Navbar />}
      <div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={2000}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Landing}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={UserForm}></Route>
                  <Route path="/myprofile" component={MyProfileContainer} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      {location === "/" || "/register" ? null : <Menu />}
    </div>
  );
}

export default Main;
