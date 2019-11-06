import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */

      <button className = 'button' onClick = {() => props.setNum(props.num + props.button)}>
        {props.button}
      </button>
      }
    </>
  );
};

export default NumberButton;