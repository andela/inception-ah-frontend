import React, { Fragment, Component } from "react";
import { PropTypes } from "prop-types";
import CommentButton from "<components>/CommentButton";
import "<styles>/CommentHeader.scss";

class CommentHeader extends Component {
  likeHandler = () => {
    console.log("This is a button to like an article");
  }

  ratingsHandler = () => {
    console.log("This is a button to to rate an article");
  }

  reportArticleHandler = () => {
    console.log("This is a button to to report an article");
  }

  showCommentsHandler = () => {
    console.log("This is a button to show comments");
  }

  render() {
    return (
      <Fragment>
        <div className="comment-header">
          <div className="credit">
            Like this post? Give <b>{this.props.author}</b> a credit!
          </div>
          <div className="buttons-container">
            <CommentButton icon="comment" text={"8"} handleClick={this.showCommentsHandler} />
            <div className="grouped-buttons">
              <CommentButton icon="star outline" handleClick={this.ratingsHandler} />
              <CommentButton icon="heart outline" handleClick={this.likeHandler} />
              <CommentButton
                icon="flag"
                text="Report"
                style="curved-comment-btn"
                handleClick={this.reportArticleHandler}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CommentHeader.propTypes = {
  commentCount: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default CommentHeader;
