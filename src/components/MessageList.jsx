import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { query, limitToLast, orderByKey, onValue } from "firebase/database";

import { gravatarPath } from "src/gravator";
import { messagesRef } from "src/firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: "100%",
    overflow: "auto",
  },
  inline: {
    display: "inline",
  },
  dividerWidth: {
    width: "90%",
  },
});

export const MessageList = (userName) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(userName);
  const [messages, setMessages] = useState([]);

  const messageQuery = query(
    messagesRef,
    orderByKey("message"),
    limitToLast(3)
  );

  // 初回の既存メッセージ取得
  useEffect(() => {
    onValue(messageQuery, (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;

      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);

  return (
    <List className={classes.root}>
      {messages.map(({ key, userName, message }) => {
        return (
          <>
            <ListItem key={key} userName={userName} message={message}>
              <ListItemAvatar>
                <Avatar src={avatarPath} />
              </ListItemAvatar>
              <ListItemText
                primary={userName}
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
      })}
    </List>
  );
};
