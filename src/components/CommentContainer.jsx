import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentCard from "<components>/CommentCard";
import NewComment from "<components>/NewComment";
import { PropTypes } from "prop-types";
import image from "<images>/lateefat.jpg";

class CommentContainer extends Component {
  state = {
    comments: this.props.comments
  }

  render() {
    return (
      <Fragment>
        {
          this.state.comments.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment}
              image={image}
              reviewer="Lateefat Amuda"

            />
          ))
        }
        <NewComment />
      </Fragment>
    );
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  comments: state.article.articleData.articleComments
});

export default connect(mapStateToProps)(withRouter(CommentContainer));
