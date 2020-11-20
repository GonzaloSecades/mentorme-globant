import React from "react"

function FormUserSuccsess(props){

    const prev = (e) =>{
        e.preventDefault()
        props.prevStep()
    
    }

    return(
     <div>
          <p>STEP 5 SELECCIONO MENTOR O MENTEE.</p>
       <button  onClick={prev} >Volver<br/></button>
     
     </div>


    ) 
    


}
export default FormUserSuccsess