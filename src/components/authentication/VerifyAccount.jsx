import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import verifyUserEmail from "<authActions>/verifyUser";

class VerifyAccount extends Component {
  componentDidMount() {
    const {
      location: { search }
    } = this.props;
    this.props.verifyUserEmail(search, this.props.history);
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
