import React from "react";
import { prependToMemberExpression } from "@babel/types";

export const Display = (props) => {
  return <div className="display">{/* Display any props data here */
  props.show}</div>;
};
