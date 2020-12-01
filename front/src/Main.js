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
import MyMentorDashboard from "./components/MyMentorDashboard/MyMentorDashboard"
import MyProfileContainer from "./components/MyProfile/MyProfileContainer"
import AvatarUploadContainer from "./components/MyProfile/AvatarUpload"
import SelectSkillsContainer from "./containers/FilterMentoreeSearchContainer"
import FindMentoreeContainer from "./containers/FindMentoreeContainer"
import MentorsMentees from "./components/MeyMentors-Mentees/MentorsMentees"
import Mentees from "./containers/Mentees"
import MyMentees from "./containers/Mentee"
import MatchingContainer from "./components/Matching/MatchingContainer"

// ACTIONS
import { me } from "./redux/action-creators/currentUser"

function Main() {
  matrixLog("MAIN")
  const dispatch = useDispatch()
  const lock = useLocation().pathname
  // HOOK PERSISTENCIA DE SESION
  useEffect(() => {
    // persistencia
    if (document.cookie) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token"))
        .split("=")[1]
      dispatch(me(token))
      //   if (lock === "/") {
      //     setTimeout(() => {
      //       history.push("/myprofile")
      //     }, 1500)
      //   }
      // } else if (lock === "/") {
      //   setTimeout(() => {
      //     history.push("/login")
      //   }, 1500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="order">
      {lock === "/" ? null : <Navbar />}
      <div>
        <Route
          render={({ location }) => (
            // <TransitionGroup>
            <CSSTransition key={location.key} timeout={2000} classNames="fade">
              <Switch location={location}>
                <Route path="/login" component={Login} />
                <Route path="/register" component={UserForm} />
                <Route path="/myprofile" component={MyProfileContainer} />
                <Route exact path="/myprogress" component={MyMentorDashboard} />
                <Route path="/mymentees" component={Mentees} />
                <Route path="/menteepage" component={MyMentees} />
                <Route path="/matching" component={MatchingContainer} />
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
      {lock === "/" || lock === "/login" || lock === "/register" ? null : <Menu />}
    </div>
  )
}

export default Main
