import React from "react"

function FormUserData(props){

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
              <p>STEP 2 DATOS PERSONALES...</p>
            <button onClick={next} >Continuar<br/></button>
            <button  onClick={prev} >Volver<br/></button>
        </div>


    ) 

}

export default FormUserData