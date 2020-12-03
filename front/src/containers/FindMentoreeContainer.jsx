import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useHistory } from "react-router-dom"
import axios from "axios"
import { matrixLog } from "../utils/logger"

import FindMentoree from "../components/FindMentoree/FindMentoree"

function FindMentoreeContainer() {
  matrixLog("FIND MENTOREE CONTAINER")
  const path = useLocation().pathname

  const currentUser = useSelector((state) => state.currentUser) // usuario que esta logueado
  const [mentors, setMentors] = useState([{ _id: 0 }]) // meto los user que matchearon
  const [positionMentorOne, setPositionMentorOne] = useState(0) // muestro el primero de la lista mentores
  const [positionMentorTwo, setPositionMentorTwo] = useState(1) // muestro el segundo de la lista mentores
  const [selectedMentor, setSelectedMentor] = useState({ _id: 0 }) // guardo el mentor ganandor en el match
  const [finish, setFinish] = useState(false) // abre el modal
  const userId = currentUser._id // id del usuario logueado
  const mentorOne = mentors[positionMentorOne] || []
  const mentorTwo = mentors[positionMentorTwo] || []

  useEffect(() => {
    axios
      .get(`/api/users/${userId}/mentors/match`)
      .then(({ data }) => {
        console.log(data)
        setMentors(data)
      })
      .catch(console.error(Error))
  }, [userId])

  // TARJETA UNO
  const handleClickMentorOne = (e, option) => {
    e.preventDefault()
    if (selectedMentor._id === mentorOne._id) {
      // router.post("/:userId/mentors/:mentorId/add", postUserMentor)
      const teachingSkills = mentorOne.skillsToTeach.map((el) => {
        return { _id: el._id, name: el.name }
      })
      const mentoree = option === "mentor" ? "mentors" : "mentees"
      axios
        .post(`/api/users/${userId}/${mentoree}/${mentorOne._id}/add`, { teachingSkills })
        .then((data) => console.log(data.data))
      setFinish(true)
    } else {
      setSelectedMentor(mentorOne)
      setPositionMentorTwo(positionMentorTwo + 2)
    }
  }

  // TARJETA DOS
  const handleClickMentorTwo = (e, option) => {
    e.preventDefault()
    if (selectedMentor._id === mentorTwo._id) {
      const teachingSkills = mentorTwo.skillsToTeach.map((el) => {
        return { _id: el._id, name: el.name }
      })
      const mentoree = option === "mentor" ? "mentors" : "mentees"
      axios
        .post(`/api/users/${userId}/${mentoree}/${mentorTwo._id}/add`, { teachingSkills })
        .then((data) => console.log(data.data))
      setFinish(true)
    } else {
      setSelectedMentor(mentorTwo)
      setPositionMentorOne(positionMentorOne + 2)
    }
  }

  return (
    <FindMentoree
      option={path === "/find/mentor" ? "mentor" : "mentee"}
      mentorOne={mentorOne}
      mentorTwo={mentorTwo}
      handleClickMentorOne={handleClickMentorOne}
      handleClickMentorTwo={handleClickMentorTwo}
      finish={finish}
    />
  )
}
export default FindMentoreeContainer
