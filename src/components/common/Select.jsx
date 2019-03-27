import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, value, error, handleChange, options, placeholder }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="field">
      <select
        className="ui fluid dropdown"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      >
        {selectOptions}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

export default Select;
