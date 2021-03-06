import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function IconLabelTabs({ myInfo ,handleSkill,handleProgress,handleEdit}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        style={{ backgroundColor: '#fff' }}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab onClick={handleSkill} icon={<EmojiObjectsIcon />} label="SKILLS" />
        <Tab onClick={handleProgress} icon={<TrendingUpIcon />} label="Progress" />
        <Tab onClick={handleEdit} icon={<PersonPinIcon />} label="Edit" />
      </Tabs>
    </Paper>

  );
}