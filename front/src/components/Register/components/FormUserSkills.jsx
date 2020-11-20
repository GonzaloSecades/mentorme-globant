import React from "react"

function FormUserSkills(props){

    const next = (e) =>{
        e.preventDefault()
        props.nextStep()
    
    }

    const prev = (e) =>{
        e.preventDefault()
        props.prevStep()
    
    }

    return(
     <div>
          <p>STEP 3 SKILLS...</p>
            <button onClick={next} >Continuar<br/></button>
            <button  onClick={prev} >Volver<br/></button>
     </div>


    ) 



}

export default FormUserSkills