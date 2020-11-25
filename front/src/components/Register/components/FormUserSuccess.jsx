import React from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { formUserSuccessStyles } from "./materialStyles";

function FormUserSuccess(props) {
  const classes = formUserSuccessStyles();
  const theme = useTheme();

  const prev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div className="content-register">
      <p>STEP 5 SUCCSESS...</p>
      <div className="container-stepper">
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          activeStep={props.selectedStep - 2}
          className={classes.root}
          nextButton={
            <Button size="small" disabled={props.selectedStep === 4}>
              <p className="btn-steppers">Finish</p> <CheckIcon />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={prev}
              disabled={props.selectedStep === 0}
            >
              {theme.direction === "rtl" ? null : <KeyboardArrowLeft />}
              <p className="btn-steppers">Back</p>
            </Button>
          }
        />
      </div>
    </div>
  );
}
export default FormUserSuccess;
