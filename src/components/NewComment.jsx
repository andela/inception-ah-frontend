
import React, { Component, Fragment } from "react";
import CommentButton from "<components>/CommentButton";
import Image from "<components>/Image";
import kingsley from "<images>/kingsley.jpg";
import "<styles>/NewComment.scss";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      comment: ""
    };
    this.editor = React.createRef();
  }

  handleClick = () => {
    console.log("Click handler to save the comment to database");
  };

  onKeyUpHandler = () => {
    const text = this.editor.innerHTML;
    this.setState({
      isEditing: !!text,
      comment: text
    });
  };

  render() {
    return (
      <Fragment>
        <div className="comment-container">
          <Image src={kingsley} alt="user" />
          <div>
            <div className="editor-wrapper">
              <div
                contentEditable="true"
                ref={editor => (this.editor = editor)}
                className="editor"
                onKeyUp={this.onKeyUpHandler}
                placeholder="Add your comment..."
              />
              <div className="button-wrapper">
                <CommentButton
                  text="Post"
                  style={`post-comment-btn ${this.state.isEditing ? "show-button-wrapper" : ""}`}
                  handleClick={this.handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewComment;
