import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import CommentButton from "<components>/CommentButton";
import "<styles>/CommentHeader.scss";

const CommentHeader = props => {
  return (
    <Fragment>
      <div className="comment-header">
        <div className="credit">
          Like this post? Give <b>{props.author}</b> a credit!
        </div>
        <div className="buttons-container">
          <CommentButton icon="comment" text={8} />
          <div className="grouped-buttons">
            <CommentButton icon="star outline" />
            <CommentButton icon="heart outline" />
            <CommentButton
              icon="flag"
              text="Report"
              style="curved-comment-btn"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CommentHeader.propTypes = {
  commentCount: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default CommentHeader;
