import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CommentButton from "<components>/CommentButton";
import Image from "<components>/Image";
import { postNewComment } from "<commentActions>/addComment";
import "<styles>/NewComment.scss";
import { PropTypes } from "prop-types";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      content: ""
    };
    this.editor = React.createRef();
  }

  onKeyUpHandler = () => {
    const text = this.editor.innerHTML;
    this.setState({
      isEditing: !!text,
      content: text
    });
  };

  postNewComment = () => {
    this.props.handleSubmit({
      content: this.state.content, reviews: { ...this.props.user }
    });
    this.editor.innerHTML = "";
    this.setState({
      content: "",
      isEditing: false
    });
  };

  render() {
    return (
      <Fragment>
        <div className="comment-container">
          <Image src={this.props.user.imageURL} alt="user" />
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
                  style={`post-comment-btn ${
                    this.state.isEditing ? "show-button-wrapper" : ""
                  }`}
                  handleClick={this.postNewComment}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
NewComment.propTypes = {
  user: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default connect(
  null,
  { postNewComment }
)(withRouter(NewComment));
