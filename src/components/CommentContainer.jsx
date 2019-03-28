import React, { Fragment } from "react";
import CommentCard from "<components>/CommentCard";
import NewComment from "<components>/NewComment";
import { PropTypes } from "prop-types";
import image from "<images>/lateefat.jpg";

const CommentContainer = (props) => {
    return (
      <Fragment>
        {
          props.comments.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment}
              image={image}
              reviewer="Lateefat Amuda"

            />
          ))
        }
        <NewComment />
      </Fragment>
    );
};

CommentContainer.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentContainer;
