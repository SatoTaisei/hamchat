import React, { useState } from "react";

import { SignIn } from "src/components/SignIn";
import { Main } from "src/components/Main";
import config from "src/config.json";

export default () => {
  const [userName, setUserName] = useState("");

  if (config.signInEnabled && userName === "") {
    return <SignIn setUserName={setUserName} />;
  } else {
    return <Main userName={userName} />;
  }
};
