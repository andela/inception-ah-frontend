import React from "react";
import { Link } from "react-router-dom";

import "<styles>/Footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="ui container footer-container">
      <div className="footer--left">
        &copy; Copyright {new Date().getFullYear()}. Authors Haven Ltd.
      </div>
      <div className="footer--right">
        <Link to="/#">Help</Link>
        <Link to="/#">Terms</Link>
        <Link to="/#">About</Link>
        <Link to="/#">Careers</Link>
      </div>
    </div>
  </div>
);

export default Footer;
