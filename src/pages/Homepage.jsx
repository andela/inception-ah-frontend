import React, { Component, Fragment } from "react";
import HomePageIntro from "../components/HomePageIntro";
import { HomePageCards } from "../components/HomePageCards";
import Author from "../components/Author";
import TopAuthorTitle from "../components/TopAuthorTitle";

import { HomePageNavBar } from "../components/HomePageNavBar";
import "<styles>/HomePage.scss";
import Footer from "<components>/common/Footer";

class Homepage extends Component {
  render() {
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
              <HomePageCards />
            </div>
          </section>
          <section className="top-authors">
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
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Homepage;
