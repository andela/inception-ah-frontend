import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Profile from "<pages>/Profile";
import auth from "<utils>/authenticate";
import { getProfile } from "<profileActions>/profile";
import { loadUserArticles } from "<profileActions>/user";

class ProfileWrapper extends Component {
  state = {
    profileStatus: false,
    isLoading: true
  };

  componentDidMount() {
    const { userId } = this.props.match.params;
    this.setState({ profileStatus: auth.authenticateEditProfile(userId) });
    this.props.getProfile(userId, this.props.history);
    // this.props.loadUserArticles(userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.profile) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading your Requested Resource...</h1>;
    }
    return <Profile profileStatus={this.state.profileStatus} />;
  }
}

ProfileWrapper.propTypes = {
  match: PropTypes.object,
  profile: PropTypes.object,
  getProfile: PropTypes.func,
  loadUserArticles: PropTypes.func,
  history: PropTypes.object,
  isLoading: PropTypes.bool
};

const mapStateToProps = ({ profile }) => ({
  isLoading: profile.isLoading,
  profile: profile.profileData
});

export default connect(
  mapStateToProps,
  { getProfile, loadUserArticles }
)(ProfileWrapper);
