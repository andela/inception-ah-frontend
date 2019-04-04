import React, { Component, Fragment } from "react";
import HomePageIntro from "../components/HomePageIntro";
import { HomePageCards } from "../components/HomePageCards";
// import Author from "../components/Author";
// import TopAuthorTitle from "../components/TopAuthorTitle";
// import TopRatedCard from "../components/TopRatedCard";

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
          <section className="ui container home-article-cards">
            <HomePageCards />
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Homepage;
