import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import RequestPasswordResetPage from "<pages>/RequestPasswordReset";
import resetPassword from "<authActions>/resetPassword";
import AuthWrapper from "<auth>/AuthWrapper";

class RequestPasswordReset extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .resetPassword(this.props.state.email)
      .then(response => {
        this.props.clearFields();
        toast.success(response, { autoClose: 8000 });
      })
      .catch(error => {
        toast.error(error);
      });
  };

  render() {
    const { email } = this.props.state;

    return (
      <RequestPasswordResetPage
        email={email}
        handleChange={this.props.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

RequestPasswordReset.propTypes = {
  email: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  state: PropTypes.object,
  history: PropTypes.object,
  resetPassword: PropTypes.func,
  clearFields: PropTypes.func
};

export default AuthWrapper(
  connect(
    null,
    { resetPassword }
  )(withRouter(RequestPasswordReset))
);
