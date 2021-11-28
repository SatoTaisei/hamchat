import React from "react";
import { makeStyles } from "@material-ui/core/Styles";
import { Avatar, Grid } from "@material-ui/core";

import { gravatarPath } from "src/gravator";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "24px",
  },
});

export const MessageInputField = ({ userName }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(userName);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};
