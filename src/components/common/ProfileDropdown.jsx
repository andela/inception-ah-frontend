import React, { Component } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import authenticate from "<utils>/authenticate";
import Button from "<components>/CommentButton";
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

  options = logout => [
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

  render() {
    console.log(this.props);
    return (
      <Menu.Item position="left">
        <Dropdown
          trigger={
            authenticate.authenticate() ? (
              this.trigger(this.props.imageURL)
            ) : (
              <Button
                text="signin"
                handleClick={this.handleClick}
                style="signin-button"
              />
            )
          }
          options={authenticate.authenticate() ? this.options(this.logOut) : []}
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
)(withRouter(ProfileDropdown));
