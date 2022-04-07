import React from "react";
import "../../styles/_heading-one.scss";
import PropTypes from "prop-types";

export const HeadingOne = (props) => {
  return (
    <>
      <div className="heading-one">
        <div className="heading-one__heading w700" style={props.style}>
          {props.body}
        </div>
        <div className="heading-one__underline"></div>
      </div>
    </>
  );
};

HeadingOne.propTypes = {
  style: PropTypes.string,
  body: PropTypes.string,
};
