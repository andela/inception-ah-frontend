import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import SignUpPage from "<pages>/SignUpPage";
import registerNewUser from "<authActions>/signup";
import AuthWrapper from "<auth>/AuthWrapper";

class SignUpWrapper extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (!this.props.isNotValid(this.props.state.errors)) {
      return toast.warn("Please fill your credentials Correctly");
    }
    this.props
      .registerNewUser(this.props.state)
      .then(response => {
        this.props.clearFields();
        toast.success(response, { autoClose: 20000 });
      })
      .catch(error => {
        toast.error(error);
      });
  };

  render() {
    const { firstName, lastName, email, errors, password } = this.props.state;

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
  state: PropTypes.object,
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
