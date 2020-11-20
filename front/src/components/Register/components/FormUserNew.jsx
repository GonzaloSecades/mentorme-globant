import React from "react"

function FormUserNew(props){

const next = (e) =>{
    e.preventDefault()
    props.nextStep()

}
    return (
<div>
    <p>STEP 1 ERES NUEVO AQUI...</p>
    <button onClick={next} >Continuar<br/></button>
</div>

    )

}
export default FormUserNew