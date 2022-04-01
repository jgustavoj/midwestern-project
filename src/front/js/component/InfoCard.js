import React from "react";
import "../../styles/_infocard.scss";
import { Button } from "./Button.js";
import { HeadingTwo } from "./HeadingTwo";
import { ResponsiveImage } from "./ResponsiveImage";

export const InfoCard = (props) => {
  return (
    <>
      <div className="info-card">
        <div className="info-card__img">
          <ResponsiveImage src={props.image} style={props.styleImage} />
        </div>
        <HeadingTwo style={props.styleHeading} />
        <p className="info-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>

        <div className="info-card__button">
          <Button value={"Learn More"} />
        </div>
      </div>
    </>
  );
};
