import React from "react";
import { Link } from "react-router-dom";
import { HeadingOne } from "../component/HeadingOne.js";
import "../../styles/_contact.scss";
import { About } from "../component/About.js";
import { HeadingTwo } from "../component/HeadingTwo.js";
import { ResponsiveImage } from "../component/ResponsiveImage.js";
import Logo from "../../img/Logo.png";
import { InputField } from "../component/InputField.js";
import { Button } from "../component/Button.js";

export const Contact = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* <div className="container container--pall contact__container"> */}
        <div className="contact">
          <div className="contact__container">
            <div className="row">
              <div className="col contact__nav-heading-body-container">
                <div className="row contact__nav">
                  <div className="col">
                    {/* -- top left  -- */}
                    <ResponsiveImage src={Logo} />
                  </div>
                  <div className="col contact__link-mobile-view w700">
                    <Link to="/">home</Link>
                  </div>
                </div>
                <div className="row middle">
                  <div className="col">
                    <section className="contact__body">
                      {/* -- middle left -- */}
                      <HeadingOne />
                      <About />
                    </section>
                  </div>
                </div>
                <div className="row bottom">
                  <div className="col">{/* -- bottom left -- */}</div>
                </div>
              </div>

              <div className="col contact__heading-input-container">
                <div className="row">
                  <div className="col contact__link-desktop-view w700">
                    <Link to="/">home</Link>
                    {/* -- top right -- */}
                  </div>
                </div>
                <div className="row">
                  <div className="col contact__heading-two">
                    {/* <section className="contact__message"> */}
                    <HeadingTwo style={{ color: "black" }} />
                    {/* </section> */}
                    {/* --middle right -- */}
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-md-2"></div> */}
                  <div className="col-md contact__input-container">
                    {/* <div>input container</div> */}
                    <InputField />
                    <div className="contact__button">
                      <Button value={"Submit"} />
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-2"></div> */}
                {/* <div className="row">
                  <div className="col contact__button"></div>
                </div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
