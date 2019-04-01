import React from "react";
import { PropTypes } from "prop-types";

const CommentButton = props => {
  const { icon, text } = props;
  return (
    <button
      onClick={props.handleClick}
      className={`comment-btn ${props.style}`}
    >
      {icon ? <i className={`${icon} icon`} /> : ""}
      <span>{text}</span>
    </button>
  );
};

CommentButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default CommentButton;
