import React from "react";
import { makeStyles, Button } from "@material-ui/core";

function FormUserNew(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    formLogininput: {
      "& .MuiInputLabel-formControl": {
        left: "11px",
      },
      "& .MuiOutlinedInput-input": {
        padding: "4%",
        textAlign: "center",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "20px",
      },
      "& .MuiInputBase-root": {
        margin: "10px",
      },
      "& .MuiInputBase-input": {
        width: "18rem",
      },

      "& .MuiInputLabel-root.Mui-focused": {
        color: "#006400",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a6d431",
      },
    },
  }));

  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const classes = useStyles();
  return (
    <div className="content-register">
      <h3>Bienvenido, vemos que eres nuevo por aqui!</h3>
      <p>
        Comencemos por completar informacion sobre tu perfil para poder ayudarte
        a encontrar tu match perfecto
      </p>
      <Button
        style={{
          backgroundColor: "rgba(18,41,68,1)",
          borderRadius: "20px",
          width: "50%",
          margin: "35% auto",
        }}
        className={classes.buttonSignin}
        variant="contained"
        color="primary"
        onClick={next}
      >
        comenzar
      </Button>
    </div>
  );
}
export default FormUserNew;
