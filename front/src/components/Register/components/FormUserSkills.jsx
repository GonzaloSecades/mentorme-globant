import React, { useRef } from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { formUserSkillsStyles } from "./materialStyles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function FormUserSkills({ skillsList, handleChange, selectedStep, nextStep, prevStep, handleSubmit}) {
  const ref = useRef();
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const classes = formUserSkillsStyles();
  const theme = useTheme();

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };

  let name, title

  if (selectedStep === 3) { name = "skills"; title = "Ingresa tus Skills"; }
  //else if (selectedStep === 4) { name = "skillsToLearn"; title = "Elige skills que quieras aprender" }
  //else if (selectedStep === 6) { name = "skillsToTeach"; title = "Elige skills que quieras enseñar" }

  return (
    <div className="content-register">
      <h3>{title}</h3>

      <Autocomplete
        ref={ref}
        multiple
        id="checkboxes-tags-demo"
        options={skillsList}
        onChange={(event, value) => {
          const name = ref.current.getAttribute("name");
          handleChange(event, value, name);
        }}
        name={name}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </React.Fragment>
        )}
        style={{ width: "43vh" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Checkboxes"
            placeholder="Favorites"
          />
        )}
      />
      <div className="container-stepper">
        <MobileStepper
          variant="dots"
          steps={7}
          position="static"
          activeStep={selectedStep - 2}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={handleSubmit} disabled={selectedStep === 7}>
              <p className="btn-steppers">Submit</p>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                  <KeyboardArrowRight />
                )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={prev} disabled={selectedStep === 0}>
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

export default FormUserSkills;
