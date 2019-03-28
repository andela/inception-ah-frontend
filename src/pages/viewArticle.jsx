import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { convertToRaw } from "draft-js";
import { createEditorState } from "medium-draft";
import mediumDraftImporter from "medium-draft/lib/importer";
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
import { fetchArticlesBySlug } from "<articleActions>/loadArticles";
import { getProfile } from "<profileActions>/profile";
import "<styles>/ViewArticlesPage.scss";
import { getUserId } from "<utils>/authenticate";

class ViewArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidUpdate(prevProps) {
    // console.log(this.props);
    if (this.props !== prevProps && this.props.article) {
      // console.log(">>>>>>>>>", this.props.article);
      this.setState({ article: this.props.article });
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
  }

  render() {
    if (!this.state.article.content) {
      return <Loader />;
    }
    // console.log(this.state.article);
    // const articleState = convertToRaw(
    //   mediumDraftImporter(this.state.article.content)
    // );

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
                <ViewArticleHeader title="Andela simulation project" />
                <div className="article-content">
                  <ViewSingleArticle
                    ArticleState={this.props.article.content}
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
  getProfile: PropTypes.func
};

const mapStateToProps = ({ article }) => ({
  article: article.articleData
});

export default connect(
  mapStateToProps,
  { fetchArticlesBySlug, getProfile }
)(withRouter(ViewArticlePage));
