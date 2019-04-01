import React, { Component, Fragment } from "react";
import CommentButton from "<components>/CommentButton";
import Image from "<components>/Image";
import kingsley from "<images>/kingsley.jpg";
import "<styles>/NewComment.scss";

class NewComment extends Component {
  state = {
    comment: ""
  }

  handleClick = () => {
    console.log("Click handler to save the comment to database");
  }

  onKeyUpHandler = () => {
    this.setState({
      comment: document.querySelector("div[contentEditable]").innerHTML
    });
  }

  render() {
    return (
      <Fragment>
        <div className="comment-container">
          <Image src={kingsley} alt="user"/>
          <div>
            <div className="editor-wrapper">
              <div contentEditable="true" className="editor" onKeyUp={ this.onKeyUpHandler } placeholder="Add your comment..."></div>
              <div className="button-wrapper">
                <CommentButton text="Post" style="post-comment-btn" handleClick={ this.handleClick }/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewComment;
