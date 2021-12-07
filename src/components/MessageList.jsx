import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { List } from "@mui/material";
import { query, limitToLast, orderByKey, onValue } from "firebase/database";

import { messagesRef } from "src/firebase";
import { MessageItem } from "src/components/MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: "100%",
    overflow: "auto",
  },
});

export const MessageList = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  // メッセージ整列＆表示件数10件
  const messageQuery = query(
    messagesRef,
    orderByKey("message"),
    limitToLast(10)
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

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, username, message }, index) => {
        const isLastItem = length === index + 1;
        return (
          <MessageItem
            key={key}
            username={username}
            message={message}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};
