import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "<common>/Input";
import "<styles>/SignInPage.scss";
import logo from "<images>/Logo1.png";

const SignInPage = ({ email, handleChange, handleSubmit }) => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-page__form-container">
        <div className="sign-in-page__logo">
          <Link to="/">
            <img src={logo} className="sign-in-page__logo__img" />
          </Link>
        </div>
        <form className="ui form sign-in-page__form" onSubmit={handleSubmit}>
          <p className="">Request Password Reset</p>
          <Input
            icon="envelope icon"
            type="email"
            name="email"
            required
            value={email}
            placeholder="Email address"
            handleChange={handleChange}
          />
          <div className="field">
            <input
              type="submit"
              value="Reset Password"
              className="sign-in-page__btn"
            />
          </div>
          <p className="sign-in-page__signup-link">
            Login in to your Account <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  state: PropTypes.object
};

export default SignInPage;
