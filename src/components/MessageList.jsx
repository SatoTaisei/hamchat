import React from "react";
import { makeStyles } from "@material-ui/core/Styles";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

export const MessageList = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>;
};
