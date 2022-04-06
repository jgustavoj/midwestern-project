import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";
import "../../styles/_home.scss";
import { InfoCard } from "../component/InfoCard.js";
import { Challenge } from "../component/Challenge.js";
import { ResponsiveImage } from "../component/ResponsiveImage.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container container--pall">
        <section className="home-header">
          <ResponsiveImage src={Logo} />
          <div className="home-header__link">
            <Link to="/contact">contact</Link>
          </div>
        </section>
        <section className="home-cards">
          {store.data.map((value) => {
            return (
              <InfoCard
                key={value.id}
                body={value.content}
                image={value.image_url}
                buttonBody={"Learn More"}
                styleImage={value.id === 2 ? { marginBottom: "2.5rem" } : {}}
              />
            );
          })}

          {/* <InfoCard image={Talkie} buttonBody={"Learn More"} /> */}
          {/* <InfoCard
            styleImage={{ marginBottom: "2.5rem" }}
            // styleHeading={{ marginTop: "2rem" }}
            image={Rabbit}
          /> */}
          {/* <InfoCard image={Rabbit} buttonBody={"Learn More"} />
          <InfoCard image={Shield} buttonBody={"Learn More"} /> */}
        </section>
        <section className="home-challenge">
          <Challenge />
        </section>
      </div>
    </>
  );
};
