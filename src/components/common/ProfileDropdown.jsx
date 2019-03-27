import React, { Component } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import authenticate from "<utils>/authenticate";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import lateefat from "<images>/lateefat.jpg";
import "<styles>/Notification.scss";
import "<styles>/custom.scss";

class ProfileDropdown extends Component {
  trigger = (
    <span>
      <Image avatar src={lateefat} />
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
          trigger={this.trigger}
          options={this.options}
          pointing="top right"
          icon={null}
        />
      </Menu.Item>
    );
  }
}

ProfileDropdown.propTypes = {
  history: PropTypes.object
};

export default ProfileDropdown;
