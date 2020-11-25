import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { formUserDataStyles } from "./materialStyles";

function FormUserData(props) {
  const classes = formUserDataStyles();
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
      <p>Ingresa tus datos personales</p>
      <form>
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Nombre *"
          name="email"
          type="text"
          variant="outlined"
          /*    onChange={onChange} */
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Apellido *"
          name="email"
          type="text"
          variant="outlined"
          /*    onChange={onChange} */
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Email *"
          name="email"
          type="text"
          variant="outlined"
          /*    onChange={onChange} */
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Contraseña *"
          name="email"
          type="text"
          variant="outlined"
          /*    onChange={onChange} */
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Confirma tu contraseña *"
          name="email"
          type="text"
          variant="outlined"
          /*    onChange={onChange} */
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Pais *"
          name="email"
          type="text"
          variant="outlined"
          /*    onChange={onChange} */
        />
      </form>
      <div className="container-stepper">
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
    </div>
  );
}

export default FormUserData;
