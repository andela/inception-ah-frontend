import React from "react";
import { GOOGLE_URL, FACEBOOK_URL } from "<constants>/constants";
import facebook from "<assets>/images/facebook.png";
import google from "<assets>/images/search.png";

const SocialLink = () => (
  <div className="sign-up-page__social-links">
    <span>Sign Up with</span>
    <a href={GOOGLE_URL}>
      <img src={google} />
    </a>
    <a href={FACEBOOK_URL}>
      {" "}
      <img src={facebook} />
    </a>
  </div>
);

export default SocialLink;
