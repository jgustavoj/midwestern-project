import React from "react";
import PropTypes from "prop-types";

export const About = (props) => {
  return (
    <>
      <div className="about">
        <p className="about__body">
          {props.body ||
            "Lorem bad ipsum dolor sit amet, call consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem"}
        </p>
      </div>
    </>
  );
};

About.propTypes = {
  body: PropTypes.string,
};
