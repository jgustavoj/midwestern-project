import React from "react";
import "../../styles/_button.scss";

export const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
};
