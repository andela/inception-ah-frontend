import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "<styles>/FollowCard.scss";

class FollowButton extends Component {
  state = {
    text: "Follow"
  };

  handleClick = () => {
    this.setState({
      text: this.state.text === "Follow" ? "Unfollow" : "Follow"
    });
  };

  render() {
    return (
      <button
        className={`follow-card__action_btn ${this.props.style || ""}`}
        onClick={this.handleClick}
      >
        {this.state.text}
      </button>
    );
  }
}

FollowButton.propTypes = {
  style: PropTypes.string
};

export default FollowButton;
