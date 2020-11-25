import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {formUserSaveStyles} from './materialStyles'

function FormUserNew(props) {
  const classes = formUserSaveStyles();
  const theme = useTheme();

  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div className="content-register">
      <p>STEP 4...</p>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={props.selectedStep - 2}
        className={classes.root}
        nextButton={
          <Button
            size="small"
            onClick={next}
            disabled={props.selectedStep === 5}
          >
            <p className="btn-steppers">Next</p>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={prev}
            disabled={props.selectedStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <p className="btn-steppers">Back</p>
          </Button>
        }
      />
    </div>
  );
}
export default FormUserNew;
