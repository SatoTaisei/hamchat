import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { query, limitToLast, orderByKey, onValue } from "firebase/database";

import { messagesRef } from "src/firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

export const MessageList = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  const messageQuery = query(
    messagesRef,
    orderByKey("message"),
    limitToLast(3)
  );
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

  return <div className={classes.root}>MessageList</div>;
};
