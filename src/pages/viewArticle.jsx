import React, { Component, Fragment } from "react";
import NavBar from "<components>/NavBar";
import ArticleFooter from "<components>/ArticleFooter";
import CategoryLinks from "<components>/CategoryLinks";
import ViewArticleHeader from "<components>/ViewArticleHeader";
import CommentHeader from "<components>/CommentHeader";
import CommentContainer from "<components>/CommentContainer";
import "<styles>/ViewArticlesPage.scss";

class ViewArticlePage extends Component {
  render() {
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
                <ViewArticleHeader title="Andela simulation project" />
                <div className="article-content" />
                <CommentHeader author="Philip Lawson" commentCount={8} />
                <CommentContainer comments={["This is a comment from Lateefat"]}/>
              </div>
            </div>
          </div>
          <ArticleFooter />
        </div>
      </Fragment>
    );
  }
}
export default ViewArticlePage;
