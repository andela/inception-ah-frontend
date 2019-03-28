
import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CommentButton from "<components>/CommentButton";
import Image from "<components>/Image";
import kingsley from "<images>/kingsley.jpg";
import { postNewComment } from "<commentActions>/addComment";
import "<styles>/NewComment.scss";


class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      content: ""
    };
    this.editor = React.createRef();
  }

  handleClick = () => {
    this.props.postNewComment(this.props.articleSlug, this.state.content, this.props.history);
  };

  onKeyUpHandler = () => {
    const text = this.editor.innerHTML;
    this.setState({
      isEditing: !!text,
      content: text
    });
  };

  render() {
    return (
      <Fragment>
        <div className="comment-container">
          <Image src={this.props.imageURL || kingsley} alt="user" />
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


export default connect(null, { postNewComment })(withRouter(NewComment));
