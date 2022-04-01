import React from "react";
import { Link } from "react-router-dom";
import { HeadingOne } from "../component/HeadingOne.js";
import "../../styles/_contact.scss";
import { About } from "../component/About.js";
import { HeadingTwo } from "../component/HeadingTwo.js";

export const Contact = () => {
  return (
    <>
      <div className="container container--pall contact__container">
        <section className="contact">
          <HeadingOne />
          <About />
        </section>
        <section className="contact__message">
          <HeadingTwo style={{ color: "black" }} />
        </section>
      </div>
    </>
  );
};
