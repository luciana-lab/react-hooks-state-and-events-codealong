import React, { useState } from "react";

function Toggle() {
  // initial state here as false, because the button should be "OFF" when the component first renders
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(isOn => !isOn)
  }

  const color = isOn ? "lightgreen" : "red"

  return <button onClick={handleClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;