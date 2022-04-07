import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/_contact.scss";
import { HeadingTwo } from "../component/HeadingTwo.js";
import { ResponsiveImage } from "../component/ResponsiveImage.js";
import Logo from "../../img/Logo.png";
import { InputField } from "../component/InputField.js";
import { Button } from "../component/Button.js";
import { Context } from "../store/appContext.js";
import { InfoPanel } from "../component/InfoPanel.js";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    title: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="contact">
          <div className="contact__container">
            <div className="row">
              <div className="col contact__nav-heading-body-container">
                <div className="row contact__nav">
                  <div className="col contact__logo">
                    <ResponsiveImage src={Logo} />
                  </div>
                  <div className="col contact__link-mobile-view w700">
                    <Link to="/">home</Link>
                  </div>
                </div>

                <div className="row middle">
                  <div className="col">
                    <section className="contact__body">
                      {store.data
                        .filter((value) => value.id === 4)
                        .map((value) => (
                          <InfoPanel
                            key={value.id}
                            HeadingOnebody={value.title}
                            aboutBody={value.content}
                          />
                        ))}
                    </section>
                  </div>
                </div>
                <div className="row bottom">
                  <div className="col"></div>
                </div>
              </div>

              <div className="col contact__heading-input-container">
                <div className="row">
                  <div className="col contact__link-desktop-view w700">
                    <Link to="/">home</Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col contact__heading-two">
                    <HeadingTwo style={{ color: "black" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md contact__input-container">
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={handleChange}
                            name="first_name"
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={input.first_name}
                            autoFocus
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            onChange={handleChange}
                            name="last_name"
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={input.last_name}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={handleChange}
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={input.title}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={input.email}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12">
                          <textarea
                            onChange={handleChange}
                            name="message"
                            className="form-control"
                            rows="8"
                            placeholder="Message"
                            value={input.message}></textarea>
                        </div>
                      </div>
                    </form>
                    {/* <InputField
                      handleChange={handleChange}
                      firstName={input.first_name}
                      lastName={input.last_name}
                      title={input.title}
                      email={input.email}
                      message={input.message}
                    /> */}
                    <div className="contact__button">
                      <Button
                        onClick={() =>
                          actions.submitForm(
                            input.first_name,
                            input.last_name,
                            input.title,
                            input.email,
                            input.message
                          )
                        }
                        type={"submit"}
                        value={"Submit"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
