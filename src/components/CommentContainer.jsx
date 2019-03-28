import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
import CommentCard from "<components>/CommentCard";
import NewComment from "<components>/NewComment";
import { PropTypes } from "prop-types";
import image from "<images>/lateefat.jpg";
import { fetchAllComments } from "<commentActions>/addComment";
// import { CommentContainer } from '<components>/ArticlePhoto';

class CommentContainer extends Component {
  state = {
    comments: this.props.articleComments,
    user: {}
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props && this.props.articleComments){
      
      axios.get(`https://inception-ah-backend.herokuapp.com/api/v1/users/${this.props.articleComments[0].userId}`)
      .then((profile) => {
        console.log("........",  profile.data.data.imageURL);
        this.setState({user: profile.data.data})
      })
    }
      
  }
    
  

  render() {
    console.log('>>>>>>', this.props.articleComments, this.state)
    return (
      <Fragment>
        {
          this.state.comments.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment.content}
              image={ this.state.user.imageURL || image}
              reviewer={`${this.state.user.firstName}  ${this.state.user.lastName}`}

            />
          ))
        }
        <NewComment 
        imageURL={this.props.imageURL}
        articleSlug={this.props.slug}
        />
      </Fragment>
    );
  }
}


CommentContainer.propTypes = {
  // comments: PropTypes.array.isRequired
};

const mapStateToProps = ({article}) => ({
  articleComments: article.articleData.articleComments
});


export default connect(mapStateToProps, null)(CommentContainer);
