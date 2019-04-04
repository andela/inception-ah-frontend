import React, { Fragment } from "react";
import Image from "../assets/images/woman.jpg";
import "../assets/styles/TopRatedCard.scss";

const TopRatedCard = () => {
  return (
    <Fragment>
      <div className="card-container">
        <div className="card-container__image">
          <img src={Image} />
        </div>
        <div className="card-container__details">
          <h3>The psychology of coding</h3>
          <p>Joshua Obasaju</p>
          <div className="card-container__details__date">
            <p>Feb 9, 2019. 8 mins read</p>
            <i className="star outline icon" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopRatedCard;
