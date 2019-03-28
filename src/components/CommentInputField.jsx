import React, { Fragment } from "react";
import Textarea from "react-textarea-autosize";
import image from "<images>/okwukwe.jpg";

import "<styles>/CommentInputField.scss";

const CommentInputField = () => {
  return (
    <Fragment>
      <div className="comment-card">
        <div className="img-container">
          <img src={image} />
        </div>
        <div className="textarea-container">
          <Textarea className="comment-textarea" placeholder="Add a comment..." />
        </div>
      </div>
    </Fragment>
  );
};

export default CommentInputField;
