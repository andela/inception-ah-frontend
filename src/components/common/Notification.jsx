import React, { Component } from "react";
import { Menu, Image, Dropdown, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
// import "<styles>/custom.scss";
import "<styles>/Notification.scss";
import authenticate from "<utils>/authenticate";
import Button from "<components>/CommentButton";
import notification from "<images>/notification.png";

class NotificationDropdown extends Component {
  handleClick = () => {
    this.props.history.push("/signup");
  };

  render() {
    const trigger = (
      <span>
        <Image avatar src={notification} />
      </span>
    );

    const options = [
      {
        key: "notification",
        text: (
          <Link className="dropdown-color" to="3">
            Joshua just published a new article
          </Link>
        )
      }
    ];

    return (
      <Menu.Item position="left">
        <Dropdown
          trigger={
            authenticate.authenticate() ? (
              trigger
            ) : (
              <Button
                style="signin-button"
                text="Get started"
                handleClick={this.handleClick}
              />
            )
          }
          options={options}
          pointing="top right"
          icon={null}
          as="label"
        />
        {authenticate.authenticate() && (
          <Label circular color="orange" floating>
            1
          </Label>
        )}
      </Menu.Item>
    );
  }
}

NotificationDropdown.propTypes = {
  history: PropTypes.object
};

export default withRouter(NotificationDropdown);
