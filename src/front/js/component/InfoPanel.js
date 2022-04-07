import React from "react";
import { About } from "./About";
import { HeadingOne } from "./HeadingOne";

export const InfoPanel = (props) => {
  return (
    <>
      <HeadingOne body={props.HeadingOnebody} />
      <About body={props.aboutBody} />
    </>
  );
};
