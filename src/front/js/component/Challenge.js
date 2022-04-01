import React from "react";
import "../../styles/_challenge.scss";
import { HeadingOne } from "./HeadingOne.js";

export const Challenge = () => {
  return (
    <>
      <HeadingOne />
      <div className="challenge__body">
        Remove the duplicates in 2 Javascript objects (found in readme), add the
        results to an array and output the list of distinct names in an
        unordered list below this paragraph when <a href="#">this link</a> is
        clicked. If the operation has been completed already, notify the user
        that this has already been done.
      </div>
    </>
  );
};
