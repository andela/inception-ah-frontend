import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "<common>/Input";
import "<styles>/SignUpPage.scss";
import logo from "<images>/Logo1.png";

const ResetPassword = ({
  password,
  handleChange,
  confirmPassword,
  handleSubmit,
  errors
}) => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-page__navigation-bar">
        <img src={logo} className="sign-up-page__logo__img" />
        <span>
          <Link to="/signin">Log in</Link>
        </span>
      </div>
      <div className="sign-up-page__form-container">
        <p className="sign-up-page__heading">Change Your Password!</p>
        <form
          className="ui form sign-up-page__form reset-password"
          onSubmit={handleSubmit}
        >
          <Input
            icon="lock icon"
            type="password"
            errors={errors.password}
            name="password"
            value={password}
            required
            placeholder="Password"
            handleChange={handleChange}
          />
          <Input
            icon="lock icon"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            errors={errors.confirmPassword}
            required
            placeholder="Confirm Password"
            handleChange={handleChange}
          />
          <div className="field">
            <input
              type="submit"
              value="Change Password"
              className="sign-up-page__btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  confirmPassword: PropTypes.string,
  errors: PropTypes.object
};

export default ResetPassword;
