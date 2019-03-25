import React from "react";
import { Link } from "react-router-dom";
import logo from "<assets>/images/Logo1.png";

const NavigationBar = () => (
  <div className="sign-up-page__navigation-bar">
    <Link to="/">
      <img src={logo} className="sign-up-page__logo__img" />
    </Link>
    <span>
      <Link to="/signin">Log in</Link>
    </span>
  </div>
);

export default NavigationBar;
