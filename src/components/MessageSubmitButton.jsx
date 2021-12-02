import React from "react";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import { pushMessage } from "src/firebase.js";

export const MessageSubmitButton = ({ userName, text, setText }) => {
  return (
    <IconButton
      size="large"
      disabled={text === ""}
      onClick={() => {
        pushMessage({ userName, text });
        setText("");
      }}
    >
      <SendIcon fontSize="inherit" />
    </IconButton>
  );
};
