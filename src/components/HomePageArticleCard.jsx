import React from "react";
import { Link } from "react-router-dom";
import "<styles>/HomePageArticleCard.scss";
import user from "<images>/user.png";
import woman from "<images>/woman.jpg";

export const HomePageArticleCard = () => (
  <div className="ui card home-page-article-card">
    <div className="content">
      <div className="right floated meta">
        <span className="article-icon">
          <i className="heart outline icon" />
          17
        </span>
        <span className="article-icon">
          <i className="eye icon" />3
        </span>
      </div>
      <img className="ui avatar image" src={user} alt="" />
      <a href="#hh" className="author-name">
        Joshua Obasaju
      </a>
    </div>
    <div className="image">
      <img src={woman} alt="" />
    </div>
    <div className="content right floated">
      <Link to="/#" className="header">
        In the Days of the Simulations and Apprenticeship When the World was
        Worldly
      </Link>
      <div className="description description-ellipsis">
        Whats in the brain, that ink may character, Which hath not figurd to
        thee my true spirit? Whats new to speak, what now to register, That may
        express my love, or thy dear merit? Nothing, sweet boy; but yet, like
        prayers divine, I must each day say oer the very same; Counting no old
        thing old, thou mine, I thine, Even as when first I hallowd thy fair
        name. So that eternal love in loves fresh case, Weighs not the dust and
        injury of age,
      </div>
    </div>
    <div className="extra">
      <div className="extra content">
        <span className="right floated">March 28, 2019</span>
        <span>5 min read</span>
      </div>
    </div>
  </div>
);
