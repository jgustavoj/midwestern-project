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
  // const [loading, setLoading] = useState(true);
  // const [state, setState] = useState({});
  console.log("Store", store.data.content);

  // useEffect(() => {
  //   const url = "http://127.0.0.1:5000/" + "/api/home";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //       setState(data[0]);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  //   // setLoading(false);
  // }, []);

  // useEffect(() => {
  //   // setLoading(true);
  //   const fetchData = () => {
  //     fetch("http://127.0.0.1:5000/" + "/api/home")
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         console.log("res 1", data[0]);
  //         setLoading(false);
  //         setState(data[0]);
  //       })
  //       .catch((error) =>
  //         console.log("Error loading message from backend", error)
  //       );
  //   };
  //   fetchData();
  //   setLoading(false);
  // }, []);

  // console.log("state 1", state);
  // if (loading) {
  //   return <h1>Loading</h1>;
  // }
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
          <InfoCard body={store.data.content} image={Talkie} />
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
