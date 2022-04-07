import React from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};
