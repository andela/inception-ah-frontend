import React from "react";
import image from "../assets/images/imA.png";
import "<styles>/ProfileArticleCard.scss";

export default () => {
  return (
    <div className=" ui card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <a className="header">Kristy</a>
        <div className="description">
          Kristy is an art director living in New York. Kristy is an art
          director living in New York.
        </div>
      </div>
      <div className="extra content">
        <div className="meta left floated">
          <span className="date">Mar 21, 2019. 7 min</span>
        </div>
        <div className="meta right floated black-icon">
          <span>
            <i className="eye icon" />2
          </span>
          <span>
            <i className="heart outline icon" />
            17
          </span>
          <span>
            <i className="comment icon" />3
          </span>
        </div>
      </div>
    </div>
  );
};
