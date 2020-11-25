import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Button } from "@material-ui/core";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function FormUserSkills(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
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
  );
}
export default FormUserSkills;
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  {
    _id: "5fb818a7ae6e9a6349017102",
    name: "mongo",
    keywords: ["backend, odm"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017103",
    name: "sequelize",
    keywords: ["backend, orm"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017104",
    name: "node",
    keywords: ["front end framework"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017105",
    name: "docker",
    keywords: ["devops"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017106",
    name: "kubernetes",
    keywords: ["devops"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017107",
    name: "openshift",
    keywords: ["devops"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017108",
    name: "jenkins",
    keywords: ["devops"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017109",
    name: "ansible",
    keywords: ["devops"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017110",
    name: "terraform",
    keywords: ["devops"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017111",
    name: "postgres",
    keywords: ["database"],
    __v: 0,
  },
  {
    _id: "5fb818a7ae6e9a6349017112",
    name: "mysql",
    keywords: ["database"],
    __v: 0,
  },
];
