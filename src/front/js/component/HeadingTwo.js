import React from "react";
import "../../styles/_heading-two.scss";

export const HeadingTwo = (props) => {
  return (
    <>
      <div className="heading-two w700" style={props.style}>
        {props.headingTwoBody}
      </div>
    </>
  );
};
