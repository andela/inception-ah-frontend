import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Profile from "<pages>/Profile";
import { getProfile } from "<profileActions>/profile";

class ProfileWrapper extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = store => ({
  profile: store.profile.profileData
});

ProfileWrapper.propTypes = {
  match: PropTypes.object,
  profile: PropTypes.object,
  getProfile: PropTypes.func
};

export default connect(
  mapStateToProps,
  { getProfile }
)(ProfileWrapper);
