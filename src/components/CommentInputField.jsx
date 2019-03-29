import React, { Fragment } from "react";
import CommentButton from "<components>/CommentButton";
import image from "<images>/okwukwe.jpg";

import "<styles>/CommentInputField.scss";
import NewComment from "<components>/NewComment";

const CommentInputField = () => {
  return (
    <Fragment>
      <div className="comment-card">
        <div className="img-container">
          <img src={image} />
        </div>
        <div className="textarea-container">
          <NewComment className="editor" placeholder="Add a comment..." />
          <div className="button-wrapper">
            <CommentButton text="Post" style="post-comment-btn"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentInputField;
