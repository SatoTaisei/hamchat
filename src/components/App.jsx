import React, { useState } from "react";

import { SignIn } from "src/components/SignIn";
import { Main } from "src/components/Main";
import config from "src/config.json";

export default () => {
  const [username, setUserName] = useState("");

  if (config.signInEnabled && username === "") {
    return <SignIn setUserName={setUserName} />;
  } else {
    return <Main username={username} />;
  }
};
