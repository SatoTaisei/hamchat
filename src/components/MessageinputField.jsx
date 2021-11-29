import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/Styles";
import { Avatar, Grid } from "@material-ui/core";

import { MessageField } from "src/components/MessageField";
import { gravatarPath } from "src/gravator";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "24px",
  },
});

export const MessageInputField = ({ userName }) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath(userName);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField userName={userName} text={text} setText={setText} />
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};
