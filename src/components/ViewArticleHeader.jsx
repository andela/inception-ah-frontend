import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import FollowButton from "./common/FollowButton";
import kingsley from "<images>/kingsley.jpg";
import "<styles>/ViewArticleHeader.scss";

const ViewArticleHeader = props => {
  return (
    <Fragment>
      <h1 className="article-info__title">{props.title}</h1>
      <div className="article-info-container">
        <div className="article-info__summary">
          <div className="article-info__img">
            <img
              src={kingsley}
              alt="author"
            />
          </div>
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
        <FollowButton style="follow__action_btn"/>
      </div>
    </Fragment>
  );
};
ViewArticleHeader.propTypes = {
  title: PropTypes.string.isRequired
};
export default ViewArticleHeader;
