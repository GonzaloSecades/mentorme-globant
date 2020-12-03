import React from "react"
import { TextField } from "@material-ui/core"
import { formUserDataStyles } from "../../Register/components/materialStyles"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
export default function EditProfile({ user, handleChange }) {
  const classes = formUserDataStyles()
  return (
    <div className="dashProfile2Container">
      <h3 style={{ textAlign: "center" }}>Edita tu perfil</h3>
      <form>
        <TextField
          placeholder={user.firstName}
          onChange={handleChange}
          className={classes.formLogininput}
          id="outlined-search"
          label=" Nombre *"
          name="firstName"
          type="text"
          variant="outlined"

        />
        <TextField
          placeholder={user.lastName}
          className={classes.formLogininput}
          onChange={handleChange}
          id="outlined-search"
          label=" Apellido *"
          name="lastName"
          type="text"
          variant="outlined"
        />
        <TextField
          className={classes.formLogininput}
          placeholder={user.email}
          id="outlined-search"
          label=" Email *"
          name="email"
          type="email"
          variant="outlined"
          onChange={handleChange}

        />
        <TextField
          className={classes.formLogininput}
          placeholder={user.password}
          id="outlined-search"
          label=" Contraseña *"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleChange}

        />

        <TextField
          className={classes.formLogininput}
          placeholder={user.phoneNumber}
          id="outlined-search"
          label="Telefono *"
          name="phoneNumber"
          type="tel"
          variant="outlined"
          onChange={handleChange}

        />
        <div className="buttonEditProfile">
          <Link to="/myprofile" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "rgba(18,41,68,1)",
                border: "2px solid rgba(18,41,68,1)",
                marginTop: 25,
                textDecoration: "none",
                borderRadius: "20px"
              }}
              className="buttoncreateacc"
              variant="outlined"
              color="primary"
            >
              {" "}
              Submit{" "}
            </Button>
          </Link>
        </div>


      </form>
    </div>
  )
}
