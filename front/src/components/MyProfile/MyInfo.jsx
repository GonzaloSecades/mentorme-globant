import React from "react"

export default function MyInfo({user}){
    <div className="prueba">
      <h3>Nombre</h3>
      <div >{user.firstName} {user.lastName}</div>
      <h3>Pais </h3>
      <div>{user.country}</div>
      {/* <h3>Idiomas</h3>
      <div>{user.languages}</div> */}
      <h3>Skills</h3>
      <div>{document.cookie && user && user.skills.map((skill)=>{
        return `${skill.name} -      `
      })}</div>
      <h3>Mail</h3>
      <div>{user.email}</div>
    </div>
  
}
