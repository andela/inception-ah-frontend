import React from "react";
import PropTypes from "prop-types";
import { GOOGLE_URL, FACEBOOK_URL } from "../constants/constants";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/search.png";

const SocialLink = ({ message }) => (
  <div className="social-link">
    <span>{message}</span>
    <a href={GOOGLE_URL}>
      <img src={google} />
    </a>
    <a href={FACEBOOK_URL}>
      {" "}
      <img src={facebook} />
    </a>
  </div>
);


SocialLink.propTypes = {
  message: PropTypes.string
};

export default SocialLink;
