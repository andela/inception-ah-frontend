import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import SignUpPage from "<pages>/SignUpPage";
import registerNewUser from "<actions>/auth/signup";
import AuthWrapper from "./AuthWrapper";

class SignUpWrapper extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (!this.props.isNotValid(this.props.authData.errors)) {
      return toast.warn("Please fill your credentials Correctly");
    }
    this.props
      .registerNewUser(this.props.authData);
  };

  render() {
    const { firstName, lastName, email, errors, password } = this.props.authData;

    return (
      <SignUpPage
        firstName={firstName}
        lastName={lastName}
        email={email}
        errors={errors}
        password={password}
        handleChange={this.props.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

SignUpWrapper.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  authData: PropTypes.object,
  isNotValid: PropTypes.func,
  history: PropTypes.object,
  registerNewUser: PropTypes.func,
  clearFields: PropTypes.func
};

export default AuthWrapper(
  connect(
    null,
    { registerNewUser }
  )(withRouter(SignUpWrapper))
);
