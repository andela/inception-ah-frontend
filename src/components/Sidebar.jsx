import React, { Component } from "react";
import "<styles>/Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="social-icon-sidebar">
        <span className="sidebar-item">
          <i className="bookmark outline icon" />
        </span>
        <span className="sidebar-item__count">
          <span className="sidebar-item sidebar-item--orange">
            <i className="heart outline icon" />
          </span>
          <span className="side-item__count-value">3</span>
        </span>
        <span className="sidebar-item sidebar-item--orange">
          <i className="heart star outline icon" />
        </span>
        <span className="sidebar-item">
          <i className="facebook f icon" />
        </span>
        <span className="sidebar-item">
          <i className="twitter icon" />
        </span>
        <span className="sidebar-item">
          <i className="thumbs down outline icon" />
        </span>
      </div>
    );
  }
}

export default Sidebar;
