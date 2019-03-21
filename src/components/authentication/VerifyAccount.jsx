import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import queryString from "querystring";
import { withRouter } from "react-router-dom";
import verifyUserEmail from "<authActions>/verifyUser";
import { getUserId } from "../../utils/authenticate";

class VerifyAccount extends Component {
  componentDidMount() {
    const {
      location: { search }
    } = this.props;
    const { token } = queryString.parse(search);
    this.props
      .verifyUserEmail(token)
      .then(() => {
        getUserId
          .then(userId => {
            this.props.history.push(`/profile/${userId}`);
          })
          .catch(() => {
            this.props.history.push("/");
          });
      })
      .catch(() => {
        this.props.history.push("/");
      });
  }

  render() {
    return null;
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
