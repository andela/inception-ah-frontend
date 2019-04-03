import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "<Components>/common/Input";
import "../assets/styles/SignUpPage.scss";
import logo from "../assets/images/Logo1.png";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/search.png";

const SignUpPage = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-page__navigation-bar">
        <img src={logo} className="sign-up-page__logo__img" />
        <span>
          <Link to="/lateefat">Log in</Link>
        </span>
      </div>
      <div className="sign-up-page__form-container">
        <p className="sign-up-page__heading">
            Sign up for free to start sharing your inspiration and story on
            authors haven
        </p>
        <form className="ui form sign-up-page__form" onSubmit={handleSubmit}>
          <Input
            icon="user icon"
            type="text"
            name="firstname"
            value={firstName}
            placeholder="Firstname"
            handleChange={handleChange}
          />
          <Input
            icon="user icon"
            type="text"
            name="lastname"
            value={lastName}
            placeholder="Lastname"
            handleChange={handleChange}
          />
          <Input
            icon="envelope icon"
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            handleChange={handleChange}
          />
          <Input
            icon="lock icon"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={handleChange}
          />
          <div className="field">
            <input
              type="submit"
              value="Sign Up"
              className="sign-up-page__btn"
            />
          </div>
          <p className="sign-up-page__signup-link">
            Already have an account? <Link to="#">Log In</Link>
          </p>
          <div className="sign-up-page__social-links">
            <span>Sign Up with</span>
            <Link to="#">
              <img src={google} />
            </Link>
            <Link to="#">
              {" "}
              <img src={facebook} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

SignUpPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default SignUpPage;
