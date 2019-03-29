import React from "react";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";
// if using webpack
import "medium-draft/lib/index.css";
import Loader from "<common>/Loader";

import "<styles>/ViewSingleArticle.scss";

class ViewSingleArticle extends React.Component {
  render() {
    if (!this.props.ArticleState) {
      return <Loader />;
    }
    const { ArticleState } = this.props;
    return (
      <div className="single-article">{ReactHtmlParser(ArticleState)}</div>
    );
  }
}

ViewSingleArticle.propTypes = {
  ArticleState: PropTypes.string
};

export default ViewSingleArticle;
