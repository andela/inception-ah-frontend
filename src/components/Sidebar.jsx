import React, { Component } from "react";
import PropTypes from "prop-types";
import "<styles>/Sidebar.scss";

class Sidebar extends Component {
  render() {
    console.log(">>>>>", this.props);
    return (
      <div className="social-icon-sidebar">
        <span className="sidebar-item">
          <i className="bookmark outline icon" />
        </span>
        <span className="sidebar-item__count">
          <span
            className="sidebar-item sidebar-item--orange"
            onClick={() => this.props.addReaction(true)}
          >
            <i className="heart outline icon" />
          </span>
          <span className="side-item__count-value">{this.props.noOfLikes}</span>
        </span>
        <span className="sidebar-item__count">
          <span
            className="sidebar-item sidebar-item--orange"
            onClick={() => this.props.addReaction(false)}
          >
            <i className="thumbs down outline icon" />
          </span>
          <span className="side-item__count-value">
            {this.props.noOfDislikes}
          </span>
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
      </div>
    );
  }
}
Sidebar.propTypes = {
  addReaction: PropTypes.func,
  noOfLikes: PropTypes.number,
  noOfDislikes: PropTypes.number
};
export default Sidebar;
