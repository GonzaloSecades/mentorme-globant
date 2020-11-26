import React from "react";
import { useTheme, withStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { formUserSaveStyles } from "./materialStyles";
import { Paper, TableRow, TableContainer, TableCell, TableBody, Table } from "@material-ui/core";

function FormUserNew({ prevStep, selectedStep, steps, data, handleSubmit }) {
  const classes = formUserSaveStyles();
  const theme = useTheme();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      margin: 0,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('NOMBRE:', data.firstName),
    createData('APELLIDO:', data.lastName),
    createData('EMAIL:', data.email),
    createData('TELEFONO:', data.phoneNumber),
    createData('PAIS:', data.country),

  ];

  let title
  if (selectedStep === 4) { title = "Confirma si los datos ingresados son correctos"; }

  return (
    <div className="content-register">
      <h3>{title}</h3>
      <TableContainer component={Paper}>
        <Table className={StyledTableCell.table} aria-label="customized table">
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
        onClick={handleSubmit}
      >
        {" "}confirmar{" "}
      </Button>
      <div className="container-stepper">
        <MobileStepper
          variant="dots"
          steps={steps}
          position="static"
          activeStep={selectedStep - 2}
          className={classes.root}
          nextButton={
            <Button size="small">
              <p className="btn-steppers"></p>
              {theme.direction === "rtl" ? (<KeyboardArrowLeft />) : (null)}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={prev}
              disabled={selectedStep === 0}
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
export default FormUserNew;
