import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import authenticate from "../utils/authenticate";

class Profile extends Component {
  logOut = () => {
    authenticate.logoutUser();
    this.props.history.push("/");
    toast.success("You are now Logged out");
  };

  render() {
    return (
      <Fragment>
        <h1>This is Profile page</h1>
        <button onClick={this.logOut}>Logout</button>
      </Fragment>
    );
  }
}

Profile.propTypes = {
    history: PropTypes.object
};

export default Profile;
