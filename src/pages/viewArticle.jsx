import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "<components>/NavBar";
import ArticleFooter from "<components>/ArticleFooter";
import Loader from "<common>/Loader";
import SideBar from "<components>/Sidebar";
import CategoryLinks from "<components>/categoryLinks";
import CommentContainer from "<components>/CommentContainer";
import ViewSingleArticle from "<components>/ViewSingleArticle";
import ViewArticleHeader from "<components>/ViewArticleHeader";
import {
  fetchArticlesBySlug,
  fetchAllArticles
} from "<articleActions>/loadArticles";
import { getProfile } from "<profileActions>/profile";
import "<styles>/ViewArticlesPage.scss";
import { getUserId } from "<utils>/authenticate";
import {
  addArticleReaction,
  addCommentReaction
} from "<reactionActions>/addReaction";

class ViewArticlePage extends Component {
  state = {
    article: {},
    allArticles: [],
    reRender: null
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.article) {
        this.setState({ article: this.props.article });
      }
      if (this.props.allArticles) {
        this.setState({ allArticles: this.props.allArticles });
      }
      if (this.props.match.params.slug !== prevProps.match.params.slug) {
        this.setState({ article: {} });
        this.props.fetchArticlesBySlug(
          this.props.match.params.slug,
          this.props.history
        );
      }
    }
  }

  componentDidMount() {
    getUserId()
      .then(userId => {
        this.props.getProfile(userId);
      })
      .catch(() => {});

    const { slug } = this.props.match.params;
    this.props.fetchArticlesBySlug(slug, this.props.history);
    this.props.fetchAllArticles();
  }

  likeOrDislikeAnArticle = reaction => {
    this.props.addArticleReaction(this.state.article.slug, reaction);
  };

  likeOrDislikeAComment = id => {
    this.props.addCommentReaction(this.props.article.slug, id, true);
  };

  render() {
    if (!this.state.article.content) {
      return <Loader />;
    }
    // console.log(">>>>!!!!!!!", this.props);
    return (
      <Fragment>
        <NavBar />
        <div className="article-main">
          <div className="category-container">
            <CategoryLinks categories={["Technology", "Science", "Health"]} />
          </div>
          <div className="article-container">
            <div className="content">
              <div className="section">
                <ViewArticleHeader
                  title={this.state.article.title}
                  author={this.state.article.author}
                  imageURL={this.state.article.author.imageURL}
                  fullName={`${this.state.article.author.firstName} ${
                    this.state.article.author.lastName
                  } `}
                  createdAt={this.state.article.createdAt}
                  readTime={this.state.article.readTime}
                />
                <div className="article-content">
                  <ViewSingleArticle
                    ArticleState={this.state.article.content}
                  />
                </div>
                <SideBar
                  addReaction={reaction =>
                    this.likeOrDislikeAnArticle(reaction)
                  }
                  noOfLikes={
                    this.state.article.numberOfLikes
                  }
                  noOfDislikes={
                    this.state.article.numberOfDislikes
                  }
                />
                <CommentContainer
                  author={this.state.article.author}
                  user={this.props.profile}
                  addReaction={id => this.likeOrDislikeAComment(id)}
                />
              </div>
            </div>
          </div>
          <ArticleFooter />
        </div>
      </Fragment>
    );
  }
}

ViewArticlePage.propTypes = {
  profile: PropTypes.object,
  history: PropTypes.object,
  fetchArticlesBySlug: PropTypes.func,
  match: PropTypes.object,
  getProfile: PropTypes.func,
  article: PropTypes.object,
  fetchAllArticles: PropTypes.func,
  allArticles: PropTypes.array,
  addArticleReaction: PropTypes.func,
  newArticleReaction: PropTypes.bool,
  articleReaction: PropTypes.object,
  addCommentReaction: PropTypes.func
};

const mapStateToProps = ({ article, profile }) => ({
  article: article.articleData,
  allArticles: article.allAvailableArticles,
  profile: profile.profileData,
});

export default connect(
  mapStateToProps,
  {
    fetchArticlesBySlug,
    getProfile,
    fetchAllArticles,
    addArticleReaction,
    addCommentReaction
  }
)(withRouter(ViewArticlePage));
