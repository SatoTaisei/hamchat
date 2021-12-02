import React, { useState } from "react";
import { TextField } from "@mui/material";

import { pushMessage } from "src/firebase.js";

export const MessageField = ({ userName, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      value={text}
      fullWidth={true}
      autoFocus
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed || e.target.value === "") {
          return;
        } else if (e.key === "Enter") {
          pushMessage({ userName, text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
    />
  );
};
