import React from "react";

export const InputField = (props) => {
  return (
    <>
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              onChange={props.handleChange}
              name="first_name"
              type="text"
              className="form-control"
              placeholder="First Name"
              value={props.firstName}
              autoFocus
            />
          </div>
          <div className="form-group col-md-6">
            <input
              onChange={props.handleChange}
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={props.lastName}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={props.handleChange}
              value={props.title}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={props.handleChange}
              value={props.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <textarea
              onChange={props.handleChange}
              className="form-control"
              rows="8"
              placeholder="Message"
              value={props.message}></textarea>
          </div>
        </div>
      </form>
    </>
  );
};
