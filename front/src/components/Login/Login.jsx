import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formLogininput: {
    "& .MuiInputLabel-formControl": {
      left: "14px",
      lineHeight: "22px",
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
    /* "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#a6d431"
        }, 
        */
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#006400",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#a6d431",
    },
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div>
      <div className="formContainerLogin">
        <p>Sign In</p>
        <TextField
          className={classes.formLogininput}
          id="outlined-search"
          label=" Email *"
          type="text"
          variant="outlined"
        />
        <TextField
          className={classes.formLogininput}
          id="outlined-password-input"
          label=" Password *"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Link to="#" className="forgotpassword" href="#">
          Lost Your Password ?
        </Link>
        <div className="buttonLoginContainer">
          <Button
            style={{
              backgroundColor: "rgba(18,41,68,1)",
              borderRadius: "20px",
              width: "100%",
              margin: "20px auto",
            }}
            className={classes.buttonSignin}
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
          <Link style={{ textDecoration: "none" }} to="/register">
            <Button
              style={{
                color: "rgba(18,41,68,1)",
                border: "2px solid rgba(18,41,68,1)",
              }}
              className="buttoncreateacc"
              variant="outlined"
              color="primary"
            >
              Create Your Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
