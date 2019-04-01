import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { HomePageNavBar } from "../components/HomePageNavBar";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <HomePageNavBar />
        <div style={{ height: "1200px" }}>
          <h1 className="app">Welcome to Authors Haven</h1>
          <span>
            <Link to="/signin">Log in</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/post">post</Link>
          </span>
        </div>
      </Fragment>
    );
  }
}

export default Homepage;
