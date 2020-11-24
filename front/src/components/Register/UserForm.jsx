import React from "react"
import  { useState } from "react"
import FormUserNew from "./components/FormUserNew"
import FormUserData from "./components/FormUserData"
import FormUserSkills from "./components/FormUserSkills"
import FormUserSave from "./components/FormUserSave"
import FormUserSuccsess from "./components/FormUserSuccsess"

function UserForm(){
const [step, setStep] = useState(1)
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
})

const nextStep = ()=>{
    setStep(step + 1) 
    }

const prevStep = ()=>{
    setStep(step - 1) 
    }

const handleChange = input => e =>{
console.log(e.target.value)
}   

    switch(step){
        case 1: 
        return <FormUserNew 
        nextStep={nextStep}
        handleChange={handleChange}
        />
        case 2: 
        return <FormUserData   
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        />
        case 3: 
        return <FormUserSkills  
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange} />
        case 4: 
        return <FormUserSave    
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}/>
        case 5: 
        return <FormUserSuccsess 
        prevStep={prevStep}
        handleChange={handleChange}/>
   
    }

}

export default UserForm
