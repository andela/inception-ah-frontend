import React from "react";
import { Link } from "react-router-dom";
import "<styles>/HomePageArticleCard.scss";
import { format } from "date-fns";
import user from "<images>/user.png";
import politics from "<images>/politics.jpg";

export const HomePageArticleCard = ({ article }) => (
  <div className="ui card home-page-article-card">
    <div className="content">
      <div className="right floated meta">
        <span className="article-icon">
          <i className="heart outline icon" />
          {article.numberOfLikes}
        </span>
        <span className="article-icon">
          <i className="comment outline icon " />{article.commentCounts}
        </span>
      </div>
      <img
        className="ui avatar image"
        src={article.author.imageURL || user}
        alt=""
      />
      <Link to="/#" className="author-name">
        {`${article.author.firstName} ${article.author.lastName}`}
      </Link>
    </div>
    <div className="image">
      <img src={article.imageURL || politics} alt="" />
    </div>
    <div className="content right floated">
      <Link to={`/articles/${article.slug}`} className="header">
        {article.title}
      </Link>
      <div className="description description-ellipsis">
        {article.description}
      </div>
    </div>
    <div className="extra">
      <div className="extra content">
        <span className="right floated">{`${format(
          article.createdAt,
          "MMM D, YYYY"
        )}.`}</span>
        <span>{article.readTime} min read</span>
      </div>
    </div>
  </div>
);
