import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Talkie from "../../img/Talkie.png";
import Rabbit from "../../img/Rabbit.png";
import Shield from "../../img/Shield.png";
import Logo from "../../img/Logo.png";
import "../../styles/_home.scss";
import { InfoCard } from "../component/InfoCard.js";
import { Challenge } from "../component/Challenge.js";
import { ResponsiveImage } from "../component/ResponsiveImage.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { loading, setLoading } = useState(true);
  const { state, setState } = useState(null);

  function load() {
    function mockLoading() {
      setLoading(true);
      async function f() {
        try {
          let response = await fetch("http://127.0.0.1:5000/" + "/api/home");
          let data = await response.json();
          console.log("data", data);
          setState({ meesage: data });
        } catch (err) {
          // catches errors both in fetch and response.json
          console.log("Error loading message from backend", error);
        }
      }
      f();
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }
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
          {/* <h1>{data.content}</h1> */}
        </section>
      </div>
    </>
  );
};
