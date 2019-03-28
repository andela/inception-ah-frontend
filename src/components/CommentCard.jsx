import React, { Fragment } from "react";
import image from "<images>/lateefat.jpg";

import "<styles>/CommentCard.scss";

const CommentCard = () => {
  return (
    <Fragment>
      <div className="comment-card">
        <div className="img-container">
          <img src={image} />
        </div>
        <div className="comment-details">
            <div className="comment-author">Lateefat Amuda</div>
            <div className="comment-content">I love this artcle!</div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentCard;
