import React from "react";
import React, { useState } from "react";

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return <button onClick={handleClick}>{isToggleOn ? "On" : "Off"}</button>;
}
