import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const MessageField = ({ name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      value={text}
      fullWidth={true}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed || e.target.value === "") {
          return;
        } else if (e.key === "Enter") {
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
    />
  );
};
