import React, { useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import { gravatarPath } from "src/gravator";

const useStyles = makeStyles({
  inline: {
    display: "inline",
  },
  dividerWidth: {
    width: "90%",
  },
});

export const MessageItem = ({ username, message, isLastItem }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(username);

  useEffect(() => {
    if (isLastItem)
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [isLastItem]);

  return (
    <>
      <ListItem username={username} message={message} ref={ref}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={
            <Typography
              className={classes.inline}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {message}
            </Typography>
          }
        />
      </ListItem>
      <Divider
        className={classes.dividerWidth}
        variant="inset"
        component="li"
      />
    </>
  );
};
