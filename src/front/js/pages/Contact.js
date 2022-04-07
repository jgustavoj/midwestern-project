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
import { useForm } from "react-hook-form";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    title: "",
    email: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
                    <HeadingTwo
                      headingTwoBody={"Contact Us!"}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md contact__input-container">
                    {/* FORM */}
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="First name"
                            {...register("firstName", {
                              required: true,
                              maxLength: 80,
                            })}
                            className={
                              errors?.firstName
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Last name"
                            {...register("lastName", {
                              required: true,
                              maxLength: 100,
                            })}
                            className={
                              errors?.lastName
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Title"
                            {...register("title", { required: true })}
                            className={
                              errors?.title
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                            className={
                              errors?.email
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            placeholder="Message"
                            {...register("message", { required: true })}
                            className={
                              errors?.message
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                        </div>
                      </div>
                      {/* <input type="submit" /> */}
                    </form>
                    {/* <form>
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
                            required
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
                            required
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
                            value={input.message}
                            required></textarea>
                        </div>
                      </div>
                    </form> */}
                    <div className="contact__button">
                      <Button
                        type={"submit"}
                        value={"Submit"}
                        onClick={handleSubmit(onSubmit)}
                      />

                      {/* <Button
                        type={"submit"}
                        value={"Submit"}
                        onClick={() => {
                          actions.submitForm(
                            input.first_name,
                            input.last_name,
                            input.title,
                            input.email,
                            input.message
                          );
                          setInput({
                            first_name: "",
                            last_name: "",
                            title: "",
                            email: "",
                            message: "",
                          });
                          alert("Contact Form Submitted!");
                        }}
                      /> */}
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
