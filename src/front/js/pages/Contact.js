import React from "react";
import { Link } from "react-router-dom";
import { HeadingOne } from "../component/HeadingOne.js";
import "../../styles/_contact.scss";
import { About } from "../component/About.js";
import { HeadingTwo } from "../component/HeadingTwo.js";
import { ResponsiveImage } from "../component/ResponsiveImage.js";
import Logo from "../../img/Logo.png";

export const Contact = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* <div className="container container--pall contact__container"> */}
        <div className="contact__container">
          <div className="row">
            <div className="col main-left-side">
              <div className="row top">
                <div className="col">
                  <ResponsiveImage src={Logo} />
                  -- top left --
                </div>
                <div className="col contact__link-mobile-view">
                  <Link to="/">home</Link>
                </div>
              </div>
              <div className="row middle">
                <div className="col">
                  <section className="contact">
                    -- middle left --
                    <HeadingOne />
                    <About />
                  </section>
                </div>
              </div>
              <div className="row bottom">
                <div className="col">-- bottom left --</div>
              </div>
            </div>

            <div
              className="col main-right-side"
              style={{
                backgroundColor: "white",
                height: "100vh",
                color: "black",
              }}>
              <div className="row">
                <div className="col contact__link-desktop-view">
                  <Link to="/">home</Link>
                  -- top right --
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <section className="contact__message">
                    <HeadingTwo style={{ color: "black" }} />
                  </section>
                  --middle right --
                </div>
              </div>
              <div className="row">
                <div className="col">-- bottom right --</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
