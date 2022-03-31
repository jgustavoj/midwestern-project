import React from "react";
import "../../styles/_infocard.scss";
import { ResponsiveImage } from "./ResponsiveImage";

export const InfoCard = (props) => {
  return (
    <>
      {/* <div
        className="card"
        style={{
          // width: "22rem",
          // padding: "0 1rem",
          // margin: "0 0.6rem 0.6rem 0.6rem ",
          color: "black",
        }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}

      <div className="info-card">
        <div className="info-card__img">
          {/* <img className="img-fluid" src={talkie} /> */}
          <ResponsiveImage src={props.image} />
        </div>
        <div className="info-card__heading">
          <h1>this is a heading</h1>
        </div>
        <div className="info-card__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ultrices leo eget sem ullamcorper luctus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </div>
        <div className="info-card__link">
          <a href="#">Learn More</a>
        </div>
      </div>
    </>
  );
};
