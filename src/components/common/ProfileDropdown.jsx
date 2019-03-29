import React, { Component } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import authenticate, { getUserId } from "<utils>/authenticate";
import Button from "<components>/CommentButton";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import user from "<images>/user.png";
import { getLoggedInProfile } from "<profileActions>/profile";
import "<styles>/Notification.scss";
import "<styles>/custom.scss";

class ProfileDropdown extends Component {
  trigger = profile => (
    <span>
      <Image avatar src={profile.imageURL || user} />
    </span>
  );

  options = (logout, profile) => [
    {
      key: "profile",
      text: (
        <Link className="dropdown-color" to={`/profile/${profile.id}`}>
          Profile
        </Link>
      )
    },
    {
      key: "post",
      text: (
        <Link className="dropdown-color" to="/post">
          Write a Post
        </Link>
      )
    },
    {
      key: "logout",
      text: (
        <a onClick={logout} className="dropdown-color">
          Logout
        </a>
      )
    }
  ];

  logOut = () => {
    authenticate.logoutUser();
    this.props.history.push("/");
    toast.success("You are now Logged out");
  };

  handleClick = () => {
    this.props.history.push("/signin");
  };

  componentDidMount() {
    getUserId().then(userId => {
      this.props.getLoggedInProfile(userId);
    });
  }

  render() {
    return (
      <Menu.Item position="left">
        <Dropdown
          trigger={
            authenticate.authenticate() ? (
              this.trigger(this.props.profile)
            ) : (
              <Button
                text="signin"
                handleClick={this.handleClick}
                style="signin-button"
              />
            )
          }
          options={
            authenticate.authenticate()
              ? this.options(this.logOut, this.props.profile)
              : []
          }
          pointing="top right"
          icon={null}
        />
      </Menu.Item>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile: profile.loggedInProfileData
});

ProfileDropdown.propTypes = {
  profile: PropTypes.object,
  history: PropTypes.object,
  getLoggedInProfile: PropTypes.func
};

export default connect(
  mapStateToProps,
  { getLoggedInProfile }
)(withRouter(ProfileDropdown));
