import React, { Fragment } from "react";
import CommentCard from "<components>/CommentCard";
import CommentInputField from "<components>/CommentInputField";

const CommentContainer = () => {
    return (
      <Fragment>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentInputField />
      </Fragment>
    );
};

export default CommentContainer;
