import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import FollowButton from "./common/FollowButton";
import Image from "<components>/Image";
import kingsley from "<images>/kingsley.jpg";
import "<styles>/ViewArticleHeader.scss";

const ViewArticleHeader = props => {
  return (
    <Fragment>
      <h1 className="article-info__title">{props.title}</h1>
      <div className="article-info-container">
        <div className="article-info__summary">
          <Image src={kingsley} alt="author" />
          <div className="article-info__author">
            <p className="article-info__author-name">
              <span>By</span> Kingsley Frank-Demesi
            </p>
            <p className="article-info__date">
              March 8, 2019
              <small className="article-info__read-time">8 min read</small>
            </p>
          </div>
        </div>
        <FollowButton />
      </div>
    </Fragment>
  );
};
ViewArticleHeader.propTypes = {
  title: PropTypes.string.isRequired
};
export default ViewArticleHeader;
