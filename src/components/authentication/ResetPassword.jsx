import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import ResetPasswordPage from "<pages>/ResetPassword";
import { resetPassword } from "<authActions>/resetPassword";
import AuthWrapper from "<auth>/AuthWrapper";

class ResetPassword extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      history: { push },
      location: { search }
    } = this.props;
    if (!this.props.isNotValid(this.props.state.errors)) {
      return toast.warn("Please fill your credentials correctly");
    }
    if (!search) {
      push("/password-reset");
      return toast.error("Please request for a password reset Link", {
        autoClose: 10000
      });
    }

    this.props
      .resetPassword(this.props.state.password, search)
      .then(response => {
        this.props.clearFields();
        push("/profile");
        toast.success(response, { autoClose: 8000 });
      })
      .catch(error => {
        this.props.history.push("/password-reset");
        toast.error(error);
      });
  };

  render() {
    const { password, confirmPassword, errors } = this.props.state;

    return (
      <ResetPasswordPage
        confirmPassword={confirmPassword}
        password={password}
        errors={errors}
        handleChange={this.props.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

ResetPassword.propTypes = {
  email: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  state: PropTypes.object,
  history: PropTypes.object,
  resetPassword: PropTypes.func,
  clearFields: PropTypes.func,
  location: PropTypes.object,
  isNotValid: PropTypes.func
};

export default AuthWrapper(
  connect(
    null,
    { resetPassword }
  )(withRouter(ResetPassword))
);
