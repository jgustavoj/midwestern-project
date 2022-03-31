import React, { useEffect } from "react";
import { CompanyLogo } from "./CompanyLogo.js";
import { Link, useHistory, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <header className="container">
      <nav className="header">
        <div className="header__logo">
          <CompanyLogo />
        </div>
        <div className="header__link">
          {location.pathname === "/" ? (
            <Link to="/contact">contact</Link>
          ) : (
            <Link to="/">home</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
