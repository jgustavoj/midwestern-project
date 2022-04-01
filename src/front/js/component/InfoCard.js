import React from "react";
import "../../styles/_infocard.scss";
import { ResponsiveImage } from "./ResponsiveImage";

export const InfoCard = (props) => {
  return (
    <>
      <div className="info-card">
        <div className="info-card__img" style={props.styleHeading}>
          <ResponsiveImage src={props.image} />
        </div>
        <div className="info-card__heading w700" style={props.styleHeading}>
          Heading Two
        </div>
        <div className="info-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </div>
        <div className="info-card__link">
          <a href="#">Learn More</a>
        </div>
      </div>
    </>
  );
};
