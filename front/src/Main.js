/* eslint-disable no-shadow */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route, Switch, useLocation, useHistory, browserHistory } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
// STYLES
import "./assets/index.scss"
// COMPONENTS
import Landing from "./components/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import UserForm from "./components/Register/UserForm"
import Login from "./components/Login/Login"
import Menu from "./components/Menu/Menu"
import MyProfileContainer from "./components/MyProfile/MyProfileContainer"
import AvatarUploadContainer from "./components/MyProfile/AvatarUpload"

// ACTIONS
import { me } from "./redux/action-creators/currentUser"

function Main() {
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const history = useHistory()
  // HOOK PERSISTENCIA DE SESION
  useEffect(() => {
    console.log(location)

    // persistencia
    if (document.cookie) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token"))
        .split("=")[1]
      dispatch(me(token))
      if (location === "/") {
        setTimeout(() => {
          history.push("/myprofile")
        }, 1500)
      }
    } else if (location === "/") {
      setTimeout(() => {
        history.push("/login")
      }, 1500)
    }
  }, [history, location, dispatch])

  return (
    <div className="order">
      {location === "/" ? null : <Navbar />}
      <div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={2000} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Landing} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={UserForm} />
                  <Route path="/myprofile" component={MyProfileContainer} />
                  <Route path="/avatar" component={AvatarUploadContainer} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      {location === "/" || location === "/register" ? null : <Menu />}
    </div>
  )
}

export default Main
