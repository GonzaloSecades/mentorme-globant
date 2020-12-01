/* eslint-disable no-shadow */
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { matrixLog } from "./utils/logger"
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
import SelectSkillsContainer from "./containers/FilterMentoreeSearchContainer"
import FindMentoreeContainer from "./containers/FindMentoreeContainer"
import MentorsMentees from "./components/MeyMentors-Mentees/MentorsMentees"

// ACTIONS
import { me } from "./redux/action-creators/currentUser"

function Main() {
  matrixLog("MAIN")
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="order">
      {location === "/" ? null : <Navbar />}
      <div>
        <Route
          render={({ location }) => (
            // <TransitionGroup>
            <CSSTransition key={location.key} timeout={2000} classNames="fade">
              <Switch location={location}>
                <Route path="/login" component={Login} />
                <Route path="/register" component={UserForm} />
                <Route path="/myprofile" component={MyProfileContainer} />
                <Route path="/skills/select" component={SelectSkillsContainer} />
                <Route path="/find/mentees" component={FindMentoreeContainer} />
                <Route path="/find/mentor" component={FindMentoreeContainer} />
                <Route path="/avatar" component={AvatarUploadContainer} />
                <Route path="/mymentors" component={MentorsMentees} />
                <Route exact path="/" component={Landing} />
              </Switch>
            </CSSTransition>
            // </TransitionGroup>
          )}
        />
      </div>
      {location === "/" || location === "/login" || location === "/register" ? null : <Menu />}
    </div>
  )
}

export default Main
