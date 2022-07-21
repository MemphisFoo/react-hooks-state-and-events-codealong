import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleClick(){
    setIsOn((isOn) => !isOn)
  }
  const color=isOn ? "red" : "white"

  // function handleToggle (e) {
  //   e.preventDefault();
  //   const isOn = !isOn
  //   {setIsOn}}

  return (<button style = {{background: color}} onClick={handleClick}>{isOn ? "On" : "Off"}</button>);
}

export default Toggle;
