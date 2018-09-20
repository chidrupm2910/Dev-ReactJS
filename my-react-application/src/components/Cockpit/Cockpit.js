import React from 'react';
import Aux from "../../hoc/hoc"
const cockpit = (props) => {
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    
    return (
        <Aux>
         <h1> {props.appTitle} </h1>
         <button style = {style} onClick={props.clicked}> Switch </button>
         <button onClick = {props.login}>Log In</button>
        </Aux>
        )
    
};

export default cockpit;