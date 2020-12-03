import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Matching from "./Matching";

export default () => {
  const currentUser = useSelector((state) => state.currentUser); //usuario que esta logueado
  const [mentors, setMentors] = useState([{ _id: 0 }]); //meto los user que matchearon
  const [positionMentorOne, setPositionMentorOne] = useState(0); //muestro el primero de la lista mentores
  const [positionMentorTwo, setPositionMentorTwo] = useState(1); //muestro el segundo de la lista mentores
  const [selectedMentor, setSelectedMentor] = useState({ _id: 0 }); //guardo el mentor ganandor en el match
  const [finish, setFinish] = useState(false); //abre el modal
  const userId = currentUser._id; //id del usuario logueado
  let mentorOne = mentors[positionMentorOne] || [];
  let mentorTwo = mentors[positionMentorTwo] || [];

  useEffect(() => {
    console.log("USEFECT", userId);
    axios
      .get(`/api/users/${userId}/mentors/match`)
      .then(({ data }) => {
        console.log(data);
        setMentors(data);
      })
      .catch(console.error(Error));
  }, [userId]);
  console.log(mentors);

  //TARJETA UNO
  const handleClickMentorOne = (e) => {
    e.preventDefault();
    if (selectedMentor._id === mentorOne._id) {
      console.log(mentors);
      axios
        .patch(`/api/users/${userId}/addMentor`, mentorOne)
        .then((data) => console.log(data.data));
      setFinish(true);
    }
    setSelectedMentor(mentorOne);
    setPositionMentorTwo(positionMentorTwo + 2);
  };

  //TARJETA DOS
  const handleClickMentorTwo = (e) => {
    e.preventDefault();
    if (selectedMentor._id === mentorTwo._id) {
      console.log("POST MENTOR TWO");
      axios
        .patch(`/api/users/${userId}/addMentor`, mentorTwo)
        .then((data) => console.log("HOLA VITTORIO", data.data));
      setFinish(true);
    }
    setSelectedMentor(mentorTwo);
    setPositionMentorOne(positionMentorOne + 2);
  };

  return (
    <Matching
      mentorOne={mentorOne}
      mentorTwo={mentorTwo}
      handleClickMentorOne={handleClickMentorOne}
      handleClickMentorTwo={handleClickMentorTwo}
      finish={finish}
    />
  );
};
