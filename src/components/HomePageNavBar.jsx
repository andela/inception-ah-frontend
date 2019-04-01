import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../assets/styles/HomePageNavBar.scss";

import logo1 from "<images>/Logo2.png";
import LoggedInMenu from "./common/LoggedInMenu";
import CategoryLinks from "./categoryLinks";

export class HomePageNavBar extends Component {
  render() {
    return (
      <div className="homepage-navbar">
        <Menu
          borderless
          style={{ margin: "0", border: "none", borderRadius: "0" }}
        >
          <Container>
            <Menu.Item as={Link} to="/" header>
              <img style={{ width: "110px" }} src={logo1} alt="logo" />
            </Menu.Item>
            <LoggedInMenu style={{ padding: "0" }} />
          </Container>
        </Menu>
        <Menu borderless style={{ margin: "0", borderRadius: "0" }}>
          <Container>
            <Menu.Item>
              <CategoryLinks categories={["Technology", "Science", "Health"]} />
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default HomePageNavBar;
