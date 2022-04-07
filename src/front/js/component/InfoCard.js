import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/_infocard.scss";
import { Button } from "./Button.js";
import { HeadingTwo } from "./HeadingTwo";
import { ResponsiveImage } from "./ResponsiveImage";

export const InfoCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="info-card">
        <div className="info-card__img">
          <ResponsiveImage src={props.image} style={props.styleImage} />
        </div>
        <HeadingTwo
          headingTwoBody={props.headingBody}
          style={props.styleHeading}
        />
        <p className="info-card__body">{props.body}</p>

        <div className="info-card__button">
          <Button value={props.buttonBody} />
        </div>
      </div>
    </>
  );
};
