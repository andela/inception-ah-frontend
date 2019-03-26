import React, { Component, Fragment } from 'react';
import ViewArticles from './ViewArticles';
import NavBar from "<components>/NavBar";
import ArticleFooter from "<components>/common/Footer";

class ViewArticlePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <ArticleFooter />
            </Fragment>
        )
    }
}
export default ViewArticlePage;
