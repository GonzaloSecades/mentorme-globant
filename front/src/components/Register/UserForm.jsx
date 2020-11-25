import React from "react";
import { useState, useEffect } from "react";
import FormUserNew from "./components/FormUserNew";
import FormUserData from "./components/FormUserData";
import FormUserSkills from "./components/FormUserSkills";
import FormUserSave from "./components/FormUserSave";
import FormUserSuccess from "./components/FormUserSuccess";

function UserForm() {
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

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: value });
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
          user={setUser}
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
        />
      );
    case 4:
      return (
        <FormUserSave
          selectedStep={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    case 5:
      return (
        <FormUserSuccess
          selectedStep={step}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
  }
}

export default UserForm;
