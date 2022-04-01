import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Talkie from "../../img/Talkie.png";
import Rabbit from "../../img/Rabbit.png";
import Shield from "../../img/Shield.png";
import "../../styles/_home.scss";
import { InfoCard } from "../component/InfoCard.js";
import { Challenge } from "../component/Challenge.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container container--pall">
        <section className="home-cards">
          <InfoCard image={Talkie} />
          <InfoCard
            styleImage={{ marginBottom: "2.5rem" }}
            // styleHeading={{ marginTop: "2rem" }}
            image={Rabbit}
          />
          <InfoCard image={Shield} />
        </section>

        <section className="home-challenge">
          <Challenge />
        </section>
      </div>
    </>
  );
};
