import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Profile from "<pages>/Profile";
import auth from "<utils>/authenticate";
import { getProfile } from "<profileActions>/profile";
import { loadUserArticles } from "<profileActions>/user";

class ProfileWrapper extends Component {
  state = {
    profileStatus: false
  };

  componentDidMount() {
    const { userId } = this.props.match.params;
    this.setState({ profileStatus: auth.authenticateEditProfile(userId) });
    this.props.getProfile(userId);
    // this.props.loadUserArticles(userId);
  }

  render() {
    return <Profile profileStatus={this.state.profileStatus} />;
  }
}

ProfileWrapper.propTypes = {
  match: PropTypes.object,
  profile: PropTypes.object,
  getProfile: PropTypes.func,
  loadUserArticles: PropTypes.func
};

export default connect(
  null,
  { getProfile, loadUserArticles }
)(ProfileWrapper);
