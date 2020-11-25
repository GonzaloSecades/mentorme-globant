import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { formUserDataStyles } from "./materialStyles";

function FormUserData(props) {
  console.log(props.user);
  const setData = props.user;
  const [open, setOpen] = React.useState(false);
  const classes = formUserDataStyles();
  const theme = useTheme();

  const setUser = (value) => {
    setData(value);
  };

  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  //select
  const handleChange = (event) => {
    console.log(event);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="content-register">
      <h3>Ingresa tus datos personales</h3>
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

        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{ marginTop: "18px" }}
        >
          Pais
        </InputLabel>

        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          className={classes.formLogininput}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          /*   value={age} */
          onChange={handleChange}
          autoWidth={true}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} style={{ width: "42vh", textAlign: "center" }}>
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
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
