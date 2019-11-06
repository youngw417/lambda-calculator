import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick = {() => {if (props.ops === 'C') {props.setNum('')} else
      if (props.ops === '%') {props.setNum(props.num / 100)}
      else props.setNum(props.num * -1) }}>{props.ops}</button>
      }
    </>
  );
};

export default SpecialButton;