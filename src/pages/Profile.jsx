import React, { Component } from "react";
// import { toast } from "react-toastify";
import PropTypes from "prop-types";
// import authenticate from "<utils>/authenticate";

import ProfileInfo from "<components>/ProfileInfo";
import ProfileTab from "<components>/ProfileTabs";
import NavBar from "<components>/NavBar";
import Footer from "<components>/common/Footer";

class Profile extends Component {
  // logOut = () => {
  //   authenticate.logoutUser();
  //   this.props.history.push("/");
  //   toast.success("You are now Logged out");
  // };

  render() {
    return (
      // <Fragment>
      //   <h1>This is Profile page</h1>
      //   <button onClick={this.logOut}>Logout</button>
      // </Fragment>
      <div style={{ paddingTop: "3.125rem" }}>
        <NavBar />
        <ProfileInfo />
        <ProfileTab />
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object
};

export default Profile;
