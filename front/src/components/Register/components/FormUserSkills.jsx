
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import { Button } from "@material-ui/core";

function FormUserSkills(props) {
  const classes = formUserSkillsStyles();
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
      <div>
      <p>My Skills</p>

      <Autocomplete
        onChange={(event, value) => props.submitMySkills(value)} // prints the selected value
        multiple
        id="checkboxes-tags-demo"
        options={top100Films}
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
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Checkboxes"
            placeholder="Favorites"
          />
        )}
      />
    </div>
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

export default FormUserSkills;

