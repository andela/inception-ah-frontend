import React, { Component, Fragment } from "react";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="app">Welcome to Inception General Authors Haven</h1>
        <span>
          <Link to="/auth/google">Log in</Link>
          <Link to="/signup">Sign Up</Link>
        </span>
      </Fragment>
    );
  }
}

export default Homepage; 
