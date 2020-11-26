import React, { useEffect } from "react"

import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import { useSelector, useDispatch } from "react-redux"
// STYLES
import "./assets/index.scss"
// COMPONENTS
import Landing from "./components/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import UserForm from "./components/Register/UserForm"
import Login from "./components/Login/Login"
import Menu from "./components/Menu/Menu"
import MyProfile from "./components/MyProfile/MyProfile"
import MyProfileContainer from "./components/MyProfile/MyProfileContainer"
import { me } from "./redux/action-creators/currentUser"

function Main() {
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const history = useHistory()
  // HOOK PERSISTENCIA DE SESION
  useEffect(() => {
    // persistencia
    if (document.cookie) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token"))
        .split("=")[1]
      dispatch(me(token))
    }
  }, [dispatch])

  return (
    <div className="order">
      {location === "/" ? null : <Navbar />}
      <div>
        <Route
          render={() => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={2000} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Landing} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={UserForm} />
                  <Route path="/myprofile" component={MyProfileContainer} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      {location === "/" || "/register" ? null : <Menu />}
    </div>
  )
}

export default Main
