import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="app">Welcome to Inception General Authors Haven</h1>
        <span>
          <Link to="/signin">Log in</Link>
          <Link to="/signup">Sign Up</Link>
        </span>
      </Fragment>
    );
  }
}

export default Homepage;
