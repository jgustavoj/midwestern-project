import React from "react";
import "../../styles/_challenge.scss";

export const Challenge = () => {
  return (
    <>
      <div className="challenge__heading w700">Heading One</div>
      {/* <hr /> */}
      <div className="challenge__underline"></div>
      <a href="#" className="challenge__body">
        Remove the duplicates in 2 Javascript objects (found in readme), add the
        results to an array and output the list of distinct names in an
        unordered list below this paragraph when this link is clicked. If the
        operation has been completed already, notify the user that this has
        already been done.
      </a>
    </>
  );
};
