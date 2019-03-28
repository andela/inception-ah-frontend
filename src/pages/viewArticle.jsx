import React, { Component, Fragment } from "react";
import NavBar from "<components>/NavBar";
import ArticleFooter from "<components>/ArticleFooter";
import CategoryLinks from "<components>/CategoryLinks";
import ArticlePhoto from "<components>/ArticlePhoto";
import ViewArticleHeader from "<components>/ViewArticleHeader";
import AuthorArticleCard from "<common>/AuthorArticleCard";
import CommentContainer from "<components>/CommentContainer";
// import Comment from "<components>/Comment";
import "<styles>/ViewArticlesPage.scss";

class ViewArticlePage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="article-main">
          <div className="category-container">
            <CategoryLinks
              categories={["Technology", "Science", "Health"]}
            />
          </div>
          <div className="article-container">
            <div className="column-1">
              <div className="content">
                <div className="section">
                  <ArticlePhoto photoURL={""} />
                  <ViewArticleHeader title="Andela simulation project" />
                  {/* <Comment author="Philip Lawson" commentCount={8} /> */}
                </div>
              </div>
              <div
                className="comment-section"
                style={ { backgroundColor: "white", height: "800px" } }
              />
              <div
                className="comment-section"
                style={{ backgroundColor: "#" }}
              >
                <CommentContainer />
              </div>
            </div>
            <div className="column-2">
              <div className="author-artcle-section">
                <div className="title">
                  <h5>READ MORE ARTICLES BY</h5>
                  <span>Kingsley Frank-Demesi</span>
                </div>
                <div className="article-container__author-articles">
                  <AuthorArticleCard />
                  <AuthorArticleCard />
                  <AuthorArticleCard />
                </div>
              </div>
              <div className="trending-section">
                <h5>TRENDING ON AUTHORS HAVEN</h5>
              </div>
            </div>
          </div>
        </div>
        <ArticleFooter />
      </Fragment>
    );
  }
}
export default ViewArticlePage;
