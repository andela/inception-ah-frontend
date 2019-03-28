import React from "react";
import { Menu } from "semantic-ui-react";
import ProfileDropdown from "./ProfileDropdown";
import Notification from "./Notification";
import "<styles>/LoggedInMenu.scss";

const LoggedInMenu = () => {
  return (
    <Menu.Item position="right">
      <div className="ui mini icon input">
        <input type="text" placeholder="Search..." />
        <i className="search icon" />
      </div>
      <Notification /> 
      <ProfileDropdown />
    </Menu.Item>
  );
};

export default LoggedInMenu;
