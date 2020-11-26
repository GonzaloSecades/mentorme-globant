import React, { createFactory } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormUserNew from "./components/FormUserNew";
import FormUserData from "./components/FormUserData";
import FormUserSkills from "./components/FormUserSkills";
import FormUserSave from "./components/FormUserSave";
import FormUserSuccess from "./components/FormUserSuccess";
import { getSkillsList } from "../../redux/action-creators/skills";

function UserForm() {
  const dispatch = useDispatch();
  const skillsList = useSelector((state) => state.skills);
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    languages: [],
    avatar: "",
    skills: [],
    skillsToLearn: [],
    skillsToTeach: [],
    mentors: [],
    mentees: [],
    isAdmin: false,
  });

  console.log(user);

  const handleChange = (e, v, n) => {
    console.log(v);

    if (Array.isArray(v)) {
      setUser({ ...user, [n]: v });
    } else {
      const value = e.target.value;
      console.log(value);
      console.log(e.target.name);
      setUser({ ...user, [e.target.name]: value });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitMySkills = (skillsArray) => {
    setSkills(skillsArray);
  };

  const fetchAllSkills = () => {
    dispatch(getSkillsList());
  };

  useEffect(() => fetchAllSkills(), []);
  useEffect(() => console.log(skills), [skills]);
  switch (step) {
    case 1:
      return <FormUserNew nextStep={nextStep} handleChange={handleChange} />;
    case 2:
      return (
        <FormUserData
          selectedStep={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          data={user}
        />
      );
    case 3:
      return (
        <FormUserSkills
          submitMySkills={submitMySkills}
          selectedStep={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          skillsList={skillsList}
        />
      );
    case 4:
      return (
        <FormUserSkills
          submitMySkills={submitMySkills}
          selectedStep={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          skillsList={skillsList}
        />
      );
    case 5:
      return (
        <FormUserSuccess
          selectedStep={step}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 6:
      return (
        <FormUserSuccess
          selectedStep={step}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 7:
      return (
        <FormUserSuccess
          selectedStep={step}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
  }
}

export default UserForm;
