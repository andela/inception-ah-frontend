import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LoggedInMenu from "./common/LoggedInMenu";
import logo1 from "<images>/Logo2.png";
import "<styles>/custom.scss";

class NavBar extends Component {
  render() {
    return (
      <Menu borderless fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img style={{ width: "110px" }} src={logo1} alt="logo" />
          </Menu.Item>
          <LoggedInMenu />
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
