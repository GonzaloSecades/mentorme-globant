import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: 5,
    flexGrow: 1,
    backgroundColor: "rgba(22,40,60,1)",
    color: "white",
  },
});

function FormUserData(props) {
  const classes = useStyles();
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
      <p>STEP 1 DATOS PERSONALES...</p>
      <MobileStepper
        variant="progress"
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
            {theme.direction === "rtl" ? "<-" : "->"}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={prev}
            disabled={props.selectedStep === 0}
          >
            {theme.direction === "rtl" ? "->" : "<-"}
            <p className="btn-steppers">Back</p>
          </Button>
        }
      />
    </div>
  );
}

export default FormUserData;
