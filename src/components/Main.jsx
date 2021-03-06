import React from "react";
import { makeStyles } from "@mui/styles";

import { MessageList } from "src/components/MessageList";
import { MessageInputField } from "src/components/MessageinputField";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

export const Main = ({ username }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList username={username} />
      <MessageInputField username={username} />
    </div>
  );
};
