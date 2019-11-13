import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className ="opButtons" onClick= { () =>
      {if (props.ops.value === '=') console.log(props.setNum(props.num))
      else props.setNum(props.num + props.ops.value) }}>{props.ops.value} </button>
      }
    </>
  );
};

export default OperatorButton;