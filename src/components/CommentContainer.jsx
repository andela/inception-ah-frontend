import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CommentHeader from "<components>/CommentHeader";
import CommentCard from "<components>/CommentCard";
import NewComment from "<components>/NewComment";
import PropTypes from "prop-types";
import Loader from "<common>/Loader";
import { fetchAllComments, postNewComment } from "<commentActions>/addComment";

class CommentContainer extends Component {
  state = {
    comments: [],
    reviewers: []
  };

  handleSubmit = newComment => {
    this.props.postNewComment(
      this.props.slug,
      newComment.content,
      this.props.history
    );
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  };

  componentDidMount() {
    this.props.fetchAllComments(this.props.slug);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.comments) {
      this.setState({
        comments: this.props.comments
      });
    }
  }

  render() {
    if (!this.state.comments) {
      return <Loader />;
    }
    // console.log(">>>>>", this.state.comments);
    return (
      <Fragment>
        <CommentHeader
          author={this.props.author}
          commentCount={this.state.comments.length}
        />
        {this.state.comments.length &&
          this.state.comments.map((comment, index) => {
            return (
              <CommentCard
                key={index}
                isReviewer={this.props.user.id === comment.reviews.id}
                comment={comment.content}
                addReaction={() => this.props.addReaction(comment.id)}
                id={comment.reviews.id}
                image={comment.reviews.imageURL}
                reviewer={`${comment.reviews.firstName} ${
                  comment.reviews.lastName
                }`}
              />
            );
          })}
        <NewComment user={this.props.user} handleSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}

CommentContainer.propTypes = {
  slug: PropTypes.string.isRequired,
  fetchAllComments: PropTypes.func.isRequired,
  imageURL: PropTypes.string,
  postNewComment: PropTypes.func,
  articleComments: PropTypes.array,
  history: PropTypes.object,
  user: PropTypes.object,
  comments: PropTypes.array,
  author: PropTypes.object,
  addReaction: PropTypes.func
};

const mapStateToProps = ({ article, comment }) => ({
  articleComments: article.articleData.articleComments,
  comments: comment.allAvailableComments
});

export default connect(
  mapStateToProps,
  { fetchAllComments, postNewComment }
)(withRouter(CommentContainer));
