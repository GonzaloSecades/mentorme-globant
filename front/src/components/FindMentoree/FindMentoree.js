import React from "react"
import { matrixLog } from "../../utils/logger"

matrixLog("FindMentoree")

function FindMentoree({ option }) {
  if (option === "mentor") {
    return <div>{option}</div>
  }
  if (option === "mentee") {
    return <div>{option}</div>
  }
  return null
}
export default FindMentoree
