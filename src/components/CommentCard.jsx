import React, { Fragment, Component } from "react";
import { PropTypes } from "prop-types";
import CommentButton from "<components>/CommentButton";
import "<styles>/CommentCard.scss";

class CommentCard extends Component {
  handleLikeComment = () => {
    console.log("This is a button to handle like on a comment");
  }

  handleEditComment = () => {
    console.log("This is a button to handle edit on a comment");
  }

  handleDeleteComment = () => {
    console.log("This is a button to handle delete on a comment");
  }

  render() {
    return (
      <Fragment>
        <div className="comment-card">
          <div className="img-container">
            <img src={this.props.image} />
          </div>
          <div className="comment-details">
              <div className="comment-detail-header">
                <div className="comment-author">{this.props.reviewer}</div>
                <div className="buttons-wrapper">
                  <CommentButton icon="heart outline" handleClick={this.handleLikeComment} style="skyblue-color"/>
                  <CommentButton icon="pencil" handleClick={this.handleEditComment} style="skyblue-color"/>
                  <CommentButton icon="trash" handleClick={this.handleDeleteComment} style="skyblue-color"/>
                </div>
              </div>
              <div className="comment-content">{this.props.comment}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CommentCard.propTypes = {
  image: PropTypes.string,
  reviewer: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default CommentCard;
