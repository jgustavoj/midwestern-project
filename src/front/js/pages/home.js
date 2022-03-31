import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CompanyLogo } from "../component/CompanyLogo.js";
import "../../styles/_home.scss";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="content">
      <div>This is Home</div>
    </section>
  );
};
