import React from "react";
import PropTypes from "prop-types";

const DisplayError = ({ error }) => (
  <div className="error-container">
    <p>{error}</p>
  </div>
);

DisplayError.propTypes = {
  error: PropTypes.string.isRequired
};

export default DisplayError;
