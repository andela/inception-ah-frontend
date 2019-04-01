import React from "react";
import image from "<images>/politics.jpg";
import "<styles>/AuthorArticleCard.scss";

const AuthorArticleCard = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} alt="Image" />
      </div>
      <div className="content">
        <div className="header">The Beauty of Politics</div>
      </div>
    </div>
  );
};

export default AuthorArticleCard;
