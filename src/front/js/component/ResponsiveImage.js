import React from "react";
import PropTypes from "prop-types";

export const ResponsiveImage = (props) => {
  return <img className="img-fluid" src={props.src} />;
};

ResponsiveImage.propTypes = {
  src: PropTypes.string,
};
