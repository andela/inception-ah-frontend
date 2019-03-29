import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const {
    type,
    name,
    value,
    className,
    placeholder,
    handleChange,
    icon,
    errors
  } = props;
  return (
    <div className="field">
      <div className="ui left icon input">
        <input
          type={type}
          name={name}
          className={className || ""}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
        <i className={icon} />
      </div>
      {errors && <div className="ui pointing red basic label">{errors}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  icon: PropTypes.string,
  errors: PropTypes.string
};

export default Input;
