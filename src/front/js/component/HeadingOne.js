import React from "react";
import "../../styles/_heading-one.scss";

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
