import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import { format } from "date-fns";
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
            <img src={props.imageURL || kingsley} alt="author" />
          </div>
          <div className="article-info__author">
            <p className="article-info__author-name">
              <span>By</span> {props.fullName}
            </p>
            <p className="article-info__date">
              {`${format(props.createdAt, "MMM D, YYYY")}`}
              <small className="article-info__read-time">
                {props.readTime} {props.readTime > 1 ? "mins" : "min"} read
              </small>
            </p>
          </div>
        </div>
        <FollowButton style="follow__action_btn" />
      </div>
    </Fragment>
  );
};
ViewArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string
};
export default ViewArticleHeader;
