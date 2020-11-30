import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import Typography from "@material-ui/core/Typography"

import { getSkillsList } from "../redux/action-creators/skills"
import SelectSkills from "../components/SelectSkills/SelectSkills"

function SelectSkillsContainer() {
  console.log("-------------------------------SELECT SKILLS CONTAINER---------------------------------------")
  const location = useLocation()
  console.log("LOCATION", location)
  const dispatch = useDispatch()
  const history = useHistory()

  const skillsList = useSelector((state) => state.skills)

  // const [skills, setSkills] = useState([])
  const [, setSkillsToLearn] = useState([])
  const [, setSkillsToTeach] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    console.log("skills Length ", skillsList.length)
    if (!skillsList.length) {
      console.log("fetching skills....")
      dispatch(getSkillsList())
    }
  }, [dispatch, skillsList.length])

  const handleSubmit = (selectedSkills) => {
    if (location.state === "mentor") {
      setSkillsToLearn(selectedSkills)
      history.push({ pathname: "/find/mentor", search: "ACA VAN FUTUROS FILTROS" })
    } else if (location.state === "mentee") {
      setSkillsToTeach(selectedSkills)
      history.push({ pathname: "/find/mentees", search: "ACA VAN FUTUROS FILTROS" })
    }
  }

  const handleChange = (e, v, n) => {
    if (Array.isArray(v)) {
      setUser({ ...user, [n]: v })
    } else {
      const { value } = e.target
      setUser({ ...user, [e.target.name]: value })
    }
  }

  return (
    <>
      <h1> {location.state === "mentor" ? "BUSCAR MENTOR" : "BUSCAR MENTEES"} </h1>
      <SelectSkills
        title={location.state === "mentor" ? "¿Qué quieres aprender?" : "¿Qué quieres enseñar?"}
        skillsList={skillsList.length ? skillsList : []}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {/* <SelectedSkillsList /> Aca podria ir la proficiencia (ULTRA OPCIONAL) */}
      {/* <SelectCountry /> */}
      {/* <SelectLanguage /> */}
    </>
  )
}
export default SelectSkillsContainer
