import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Talkie from "../../img/Talkie.png";
import Rabbit from "../../img/Rabbit.png";
import Shield from "../../img/Shield.png";
import "../../styles/_home.scss";
import { InfoCard } from "../component/InfoCard.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <section className="container container--pall">
        <div className="content">
          <InfoCard image={Talkie} />
          <InfoCard image={Rabbit} />
          <InfoCard image={Shield} />
        </div>
      </section>
    </>
  );
};
