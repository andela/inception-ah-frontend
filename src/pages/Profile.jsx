import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileInfo from "<components>/ProfileInfo";
import ProfileTab from "<components>/ProfileTabs";
import NavBar from "<components>/NavBar";
import Footer from "<components>/common/Footer";

class Profile extends Component {
  render() {
    return (
      <div style={{ paddingTop: "3.125rem" }}>
        <NavBar />
        <ProfileInfo profile={this.props.profile} />
        <ProfileTab />
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object,
  profile: PropTypes.object
};

export default Profile;
