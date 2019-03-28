import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import verifyUserEmail from "<authActions>/verifyUser";
import { toast } from "react-toastify";

class VerifyAccount extends Component {
  componentDidMount() {
    const {
      location: { search }
    } = this.props;
    this.props
      .verifyUserEmail(search)
      .then(token => {
        const { userId } = jwtDecode(token);
        this.props.history.push(`/profile/${userId}`);
        toast.success("Your Account is successfully Verified");
      })
      .catch(() => {
        this.props.history.push("/login");
        toast.error("We are unable to verify your account");
      });
  }

  render() {
    return <h1>Verifying your account ....</h1>;
  }
}

VerifyAccount.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object,
  verifyUserEmail: PropTypes.func
};

export default connect(
  null,
  { verifyUserEmail }
)(withRouter(VerifyAccount));
