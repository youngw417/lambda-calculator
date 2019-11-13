import React, {useState} from "react";
import OpButtons from "./OperatorButton";
import {operators} from "../../../data";
import { tsPropertySignature } from "@babel/types";
//import any components needed

//Import your array data to from the provided data file



export const Operators = (props) => {

  // STEP 2 - add the imported data to state
  const [opData, setOpData] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       opData.map((item, index) => (
         <OpButtons key = {index} ops = {item} setNum = {props.setNum} num = {props.num} />
       ))
       }
    </div>
  );
};
