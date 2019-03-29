import React, { Fragment, Component } from "react";
import { PropTypes } from "prop-types";
import CommentButton from "<components>/CommentButton";
import "<styles>/CommentCard.scss";
import classNames from "classnames";

class CommentCard extends Component {
  state = {
    isActive: false
  };

  handleLikeComment = () => {
    console.log("This is a button to handle like on a comment");
  }

  handleEditComment = () => {
    console.log("This is a button to handle edit on a comment");
  }

  handleDeleteComment = () => {
    console.log("This is a button to handle delete on a comment");
  }

  handleMouseEnter = () => {
    this.setState({
      isActive: true
    });
  }

  handleMouseOut= () => {
    this.setState({
      isActive: false
    });
  }

  render() {
    return (
      <Fragment>
        <div className="comment-card" onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut}>
          <div className="img-container">
            <img src={this.props.image} />
          </div>
          <div className="comment-details" onMouseOver={this.handleMouseEnter}>
              <div className="comment-detail-header" onMouseOver={this.handleMouseEnter}>
                <div className="comment-author" onMouseOver={this.handleMouseEnter}>{this.props.reviewer}</div>
                <div className={classNames("buttons-wrapper", { "show-buttons": this.state.isActive })} onMouseOver={this.handleMouseEnter}>
                  <CommentButton text={"0"} icon="heart outline" handleClick={this.handleLikeComment} style="skyblue-color"/>
                  { this.props.isReviewer
                    ? <Fragment>
                        <CommentButton icon="pencil" handleClick={this.handleEditComment} style="skyblue-color"/>
                        <CommentButton icon="trash" handleClick={this.handleDeleteComment} style="skyblue-color"/>
                      </Fragment>
                    : ""
                  }
                </div>
              </div>
              <div className="comment-content" onMouseOver={this.handleMouseEnter}>{this.props.comment}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CommentCard.propTypes = {
  isReviewer: PropTypes.bool,
  image: PropTypes.string,
  reviewer: PropTypes.string,
  comment: PropTypes.string
};

export default CommentCard;
