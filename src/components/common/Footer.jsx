import React from "react";
import "<styles>/Footer.scss";

const Footer = () => (
  <div className="footer">
    &copy; Copyright {new Date().getFullYear()}. Authors Haven Ltd. All Rights
    Reserved
  </div>
);

export default Footer;
