import React from "react";
import "../../styles/_heading-two.scss";
import PropTypes from "prop-types";

export const HeadingTwo = (props) => {
  return (
    <>
      <div className="heading-two w700" style={props.style}>
        {props.headingTwoBody}
      </div>
    </>
  );
};

HeadingTwo.propTypes = {
  style: PropTypes.string,
  headingTwoBody: PropTypes.string,
};
