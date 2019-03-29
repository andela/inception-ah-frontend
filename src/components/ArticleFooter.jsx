import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "<styles>/ArticleFooter.scss";
import ArticleCard from "<components>/ProfileArticleCard";
import Loader from "<common>/Loader";

class ArticleFooter extends Component {
  render() {    
    if (!this.props.allArticles) {
      return <Loader />;
    }
    return (
      <div className="article-footer">
        <div className="article-footer__container">
          {this.props.allArticles.slice(0, 3).map(article => (
            <Link key={article.id} to={`/articles/${article.slug}`}>
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ article }) => ({
  allArticles: article.allAvailableArticles
});

ArticleFooter.propTypes = {
  allArticles: PropTypes.array
};

export default connect(
  mapStateToProps,
  null
)(ArticleFooter);
