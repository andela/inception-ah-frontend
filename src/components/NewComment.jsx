import React, { Component, Fragment } from "react";
import CommentButton from "<components>/CommentButton";
import Image from "<components>/Image";
import kingsley from "<images>/kingsley.jpg";
import "<styles>/NewComment.scss";

class NewComment extends Component {
  render() {
    return (
      <Fragment>
        <div className="comment-container">
          <Image src={kingsley} alt="user"/>
          <div>
            <div className="editor-wrapper">
              <div contentEditable="true" className="editor" placeholder="Add your comment..."></div>
              <CommentButton text="Post" style="post-comment-btn"/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewComment;
