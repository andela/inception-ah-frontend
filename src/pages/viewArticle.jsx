import React, { Component, Fragment } from "react";
import NavBar from "<components>/NavBar";
import ArticleFooter from "<components>/ArticleFooter";
import CategoryLinks from "<components>/categoryLinks";
import ArticlePhoto from "<components>/ArticlePhoto";
import ViewArticleHeader from "<components>/ViewArticleHeader";
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
            <div className="column-1">
              <div className="content">
                <div className="section">
                  <ArticlePhoto photoURL={""} />
                  <ViewArticleHeader title="Andela simulation project"/>
                </div>
              </div>
            </div>
            <div className="column-2" style={{ backgroundColor: "yellow", height: "600px" }} />
          </div>
        </div>
        <ArticleFooter />
      </Fragment>
    );
  }
}
export default ViewArticlePage;
