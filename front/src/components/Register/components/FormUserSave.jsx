import React from "react"

function FormUserNew(props){

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
           <p>STEP 4 POR SI HAY QUE GUARDAR AL USER EN LA DB...</p>
            <button onClick={next} >Continuar<br/></button>
            <button  onClick={prev} >Volver<br/></button>
     </div>


    ) 

}
export default FormUserNew