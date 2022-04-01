import React from "react";
import "../../styles/_button.scss";

export const Button = (props) => {
  return (
    <>
      <div className="button">
        <div className="button__value">{props.value}</div>
      </div>
    </>
  );
};
