import React from "react";
import { Menu, Image, Dropdown, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import "<styles>/custom.scss";
import "<styles>/Notification.scss";

import notification from "<images>/notification.png";

const NotificationDropdown = () => {
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
        trigger={trigger}
        options={options}
        pointing="top right"
        icon={null}
        as="label"
      />
      <Label circular color="orange" floating>
        1
      </Label>
    </Menu.Item>
  );
};

export default NotificationDropdown;
