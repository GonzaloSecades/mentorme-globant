import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {formUserSuccess} from './materialStyles'


function FormUserSuccsess(props) {
  const classes = git a();
  const theme = useTheme();

  const prev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div className="content-register">
      <p>STEP 5 SUCCSESS...</p>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={props.selectedStep - 2}
        className={classes.root}
        nextButton={
          <Button size="small" disabled={props.selectedStep === 4}>
            <p className="btn-steppers">Finish</p>
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={prev}
            disabled={props.selectedStep === 0}
          >
            {theme.direction === "rtl" ? "->" : <KeyboardArrowLeft />}
            <p className="btn-steppers">Back</p>
          </Button>
        }
      />
    </div>
  );
}
export default FormUserSuccsess;
