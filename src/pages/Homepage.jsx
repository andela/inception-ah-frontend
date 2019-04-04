import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import HomePageIntro from "../components/HomePageIntro";
import Loader from "<common>/Loader";
import { HomePageCards } from "../components/HomePageCards";
import Author from "../components/Author";

import HomePageNavBar from "../components/HomePageNavBar";
import { fetchAllArticles } from "<articleActions>/loadArticles";
import "<styles>/HomePage.scss";
import Footer from "<components>/common/Footer";

class Homepage extends Component {
  state = {
    allArticles: []
  };

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.allArticles) {
      this.setState({ allArticles: this.props.allArticles });
    }
  }

  render() {
    if (!this.state.allArticles.length) {
      return <Loader />;
    }
    return (
      <Fragment>
        <HomePageNavBar />
        <div className="home-page">
          <section className="home-page__intro--intro">
            <div className="ui container">
              <HomePageIntro />
            </div>
          </section>
          <section className="home-article-cards">
            <div className="ui container">
              <HomePageCards articles={this.state.allArticles} />
            </div>
          </section>
          {/* <section className="top-authors">
            <div className="ui container">
              <h3 className="top-authors__header">
                Top Authors on Authors Haven
              </h3>
              <div className="top-authors__details">
                <Author />
                <Author />
                <Author />
              </div>
            </div>
          </section> */}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ article }) => ({
  allArticles: article.allAvailableArticles
});

export default connect(
  mapStateToProps,
  { fetchAllArticles }
)(Homepage);
