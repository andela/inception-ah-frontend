import React, { Component } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authenticate from "<utils>/authenticate";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import user from "<images>/user.png";
import "<styles>/Notification.scss";
import "<styles>/custom.scss";

class ProfileDropdown extends Component {
  trigger = imageURL => (
    <span>
      <Image avatar src={imageURL || user} />
    </span>
  );

  options = [
    {
      key: "profile",
      text: (
        <Link className="dropdown-color" to="/profile">
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
      key: "bookmarks",
      text: (
        <Link className="dropdown-color" to="/bookmarks">
          Bookmarks
        </Link>
      )
    },
    {
      key: "stats",
      text: (
        <Link className="dropdown-color" to="/stats">
          Stats
        </Link>
      )
    },
    {
      key: "logout",
      text: (
        <Link onClick={this.logOut} className="dropdown-color" to="/signin">
          Logout
        </Link>
      )
    }
  ];

  logOut = () => {
    authenticate.logoutUser();
    this.props.history.push("/");
    toast.success("You are now Logged out");
  };

  render() {
    return (
      <Menu.Item position="left">
        <Dropdown
          trigger={this.trigger(this.props.imageURL)}
          options={this.options}
          pointing="top right"
          icon={null}
        />
      </Menu.Item>
    );
  }
}

const mapStateToProps = store => ({
  imageURL: store.profile.profileData.imageURL
});

ProfileDropdown.propTypes = {
  imageURL: PropTypes.string,
  history: PropTypes.object
};

export default connect(
  mapStateToProps,
  null
)(ProfileDropdown);
