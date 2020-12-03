import React from "react"
import { Button } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardTeacher, faGraduationCap } from "@fortawesome/free-solid-svg-icons"

export default function MentorsMentees() {
  const iconComodin = <FontAwesomeIcon icon={faChalkboardTeacher} color="#999" size="2x" />
  const iconComodin2 = <FontAwesomeIcon icon={faGraduationCap} color="#999" size="2x" />
  return (
    <div
      style={{
        width: "100%",
        height: "14em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <Button
        style={{
          // backgroundColor: "rgba(18,41,68,1)",
          borderRadius: "20px",
          padding: "3em",
          margin: "15%",
          backgroundColor: "#36096d",
          backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)",
        }}
      >
        {" "}
        {/* <SchoolIcon style={{ color: "#999" }} /> */}
        {iconComodin2}
        <span style={{ color: "white", marginLeft: "10px" }}> Mis mentores</span>
      </Button>
      <Button
        style={{
          // backgroundColor: "rgba(18,41,68,1)",
          borderRadius: "20px",
          padding: "3em",
          margin: "15%",
          backgroundColor: "#4c4177",
          backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)",
        }}
      >
        {" "}
        {iconComodin}
        <span style={{ color: "white", marginLeft: "10px" }}> Mis mentees</span>
      </Button>
    </div>
  )
}
