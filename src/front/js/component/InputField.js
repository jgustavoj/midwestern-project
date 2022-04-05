import React from "react";

export const InputField = () => {
  return (
    <>
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              autoFocus
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="form-group col-md-6">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <textarea
              class="form-control"
              rows="8"
              placeholder="Message"></textarea>
          </div>
        </div>
      </form>
    </>
  );
};
