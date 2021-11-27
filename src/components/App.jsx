import React, { useState } from "react";

import { SignIn } from "src/components/SignIn";
import { Main } from "src/components/Main";

export default () => {
  const [name, setName] = useState("");

  if (name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
