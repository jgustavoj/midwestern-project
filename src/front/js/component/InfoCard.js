import React from "react";
import "../../styles/_infocard.scss";
import { ResponsiveImage } from "./ResponsiveImage";

export const InfoCard = (props) => {
  return (
    <>
      <div className="info-card">
        <div className="info-card__img">
          <ResponsiveImage src={props.image} />
        </div>
        <div className="info-card__heading w700">Heading Two</div>
        <div className="info-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ultrices leo eget sem ullamcorper luctus.
        </div>
        <div className="info-card__link">
          <a href="#">Learn More</a>
        </div>
      </div>
    </>
  );
};
