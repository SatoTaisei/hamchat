import React from "react";
import { makeStyles } from "@material-ui/core/Styles";

import { MessageList } from "src/components/MessageList";
import { MessageInputField } from "src/components/MessageinputField";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

export const Main = ({ userName }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField userName={userName} />
    </div>
  );
};
