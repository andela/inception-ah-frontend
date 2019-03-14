import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SignUpPage from "<Pages>/SignUpPage";

class AuthWrapper extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    console.log(e);
  };

  getPage = (page) => {
    const {
      email, password, firstName, lastName,
    } = this.state;
    switch (page) {
    case "signin":
      return <h1>This is a Sign In Page</h1>;
    case "signup":
      return (
        <SignUpPage
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    default:
      return this.props.history.push("/");
    }
  };

  render() {
    const { page } = this.props.match.params;
    return <Fragment>{this.getPage(page)}</Fragment>;
  }
}

AuthWrapper.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
};

export default withRouter(AuthWrapper);
