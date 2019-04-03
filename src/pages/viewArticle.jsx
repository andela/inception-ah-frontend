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
import CommentHeader from "<components>/CommentHeader";
import ViewArticleHeader from "<components>/ViewArticleHeader";
import {
  fetchArticlesBySlug,
  fetchAllArticles
} from "<articleActions>/loadArticles";
import { getProfile } from "<profileActions>/profile";
import "<styles>/ViewArticlesPage.scss";
import { getUserId } from "<utils>/authenticate";
import "<styles>/createArticle.scss";

class ViewArticlePage extends Component {
  state = {
    article: {},
    allArticles: []
  };

  componentDidUpdate(prevProps) {
    // console.log(this.props);
    if (this.props !== prevProps) {
      console.log(">>>>>", this.props);
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

  render() {
    if (!this.state.article.content) {
      return <Loader />;
    }

    return (
      <Fragment>
        <SideBar />
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
                <CommentHeader author="Philip Lawson" commentCount={8} />
                <CommentContainer
                  comments={["This is a comment from Lateefat"]}
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
  history: PropTypes.object,
  fetchArticlesBySlug: PropTypes.func,
  match: PropTypes.object,
  getProfile: PropTypes.func,
  article: PropTypes.object,
  fetchAllArticles: PropTypes.func,
  allArticles: PropTypes.object
};

const mapStateToProps = ({ article }) => ({
  article: article.articleData,
  allArticles: article.allAvailableArticles
});

export default connect(
  mapStateToProps,
  { fetchArticlesBySlug, getProfile, fetchAllArticles }
)(withRouter(ViewArticlePage));
