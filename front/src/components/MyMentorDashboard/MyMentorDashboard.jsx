import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckboxList from "../checkbox/CheckboxList"
import Progresscheck from "../checkbox/Progresscheck"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  Accordion: {
    "& .MuiAccordionDetails-root": {
      padding: "8px 16px 0",
    }
  }
}));

const MyMentorDashbord = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const objectiveList = useSelector(state => state.currentUser.mentors[0].objectives)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="dashContainer">
        <Accordion expanded={expanded === 'panel1'} className={classes.Accordion} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>React</Typography>
            <Typography className={classes.secondaryHeading}>Mentor: Dr. Kreshel</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="checkBoxListContainer">
              <CheckboxList objectiveList={objectiveList} />
              <Progresscheck className="progressCheck" objectiveList={objectiveList} />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Hooks</Typography>
            <Typography className={classes.secondaryHeading}>
              Mentor: Dr. Kreshel
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="checkBoxListContainer">
              <CheckboxList objectiveList={objectiveList} />
              <Progresscheck className="progressCheck" objectiveList={objectiveList} />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default MyMentorDashbord