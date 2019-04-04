import React, { Fragment } from "react";
import "../assets/styles/TopAuthorTitle.scss";

const TopAuthorTitle = () => {
  return (
    <Fragment>
      <div className="title-container">
        <div>
          <h3>Top Authors on Authors Haven</h3>
        </div>
        <div className="title-container__arrow">
          <i className="chevron right icon" />
        </div>
      </div>
    </Fragment>
  );
};

export default TopAuthorTitle;
