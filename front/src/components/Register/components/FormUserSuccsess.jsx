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

function FormUserSuccsess(props) {
  const classes = useStyles();
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
