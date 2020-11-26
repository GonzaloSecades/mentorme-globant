import React from "react"
import { useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import CheckIcon from "@material-ui/icons/Check"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import { formUserSuccessStyles } from "./materialStyles"

function FormUserSuccess({ selectedStep, prevStep, nextStep }) {
  const classes = formUserSuccessStyles()
  const theme = useTheme()

  const prev = (e) => {
    e.preventDefault()
    prevStep()
  }

  const next = (e) => {
    e.preventDefault()

    nextStep()
  }

  return (
    <div className="content-register">
      <p>STEP 5 SUCCSESS...</p>
      <div className="container-stepper">
        <MobileStepper
          variant="dots"
          steps={7}
          position="static"
          activeStep={selectedStep - 2}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={next} disabled={selectedStep === 7}>
              <p className="btn-steppers">Next</p>
              {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={prev} disabled={selectedStep === 0}>
              {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              <p className="btn-steppers">Back</p>
            </Button>
          }
        />
      </div>
    </div>
  )
}
export default FormUserSuccess
