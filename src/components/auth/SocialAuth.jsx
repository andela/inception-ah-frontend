import { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import socialAuthLogin from "../../actions/auth/socialAuth";
import getBaseUrl, { checkAuthType } from "../../utils/getUrls";

class SocialRedirect extends Component {
  componentDidMount() {
    const {
      location: { search, pathname }
    } = this.props;
    const socialToken = `${search}`;

    if (checkAuthType(pathname) === "facebook") {
      this.props
        .socialAuthLogin(getBaseUrl("facebook"), socialToken)
        .then(() => {
          this.props.history.push("/profile");
        })
        .catch(error => {
          toast.error(error);
        });
    }
    if (checkAuthType(pathname) === "google") {
      this.props
        .socialAuthLogin(getBaseUrl("google"), socialToken)
        .then(() => {
          this.props.history.push("/profile");
        })
        .catch(error => {
          toast.error(error);
        });
    }
  }

  render() {
    return null;
  }
}

SocialRedirect.propTypes = {
  location: PropTypes.object.isRequired,
  socialAuthLogin: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default connect(
  null,
  { socialAuthLogin }
)(withRouter(SocialRedirect));
