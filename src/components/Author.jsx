import React, { Fragment } from "react";
import Image from "../assets/images/solomon.jpg";
import "../assets/styles/Author.scss";

const Author = () => {
  return (
    <Fragment>
      <div className="author-container">
        <div className="author-container__image">
          <img src={Image} />
        </div>
        <div className="author-container__details">
          <h4>Odinakachukwu Ezeobika</h4>
          <p>Publications (102)</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Author;
