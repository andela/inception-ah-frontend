import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "<Common>/Input";
import "../assets/styles/SignInPage.scss";
import logo from "../assets/images/Logo1.png";
import SocialLink from "../components/SocialLinks";

const SignInPage = ({ email, password, handleChange, handleSubmit }) => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-page__form-container">
        <div className="sign-in-page__logo">
          <img src={logo} className="sign-in-page__logo__img" />
          <p>Login to start doing what you know how to do best!</p>
        </div>
        <form className="ui form sign-in-page__form" onSubmit={handleSubmit}>
          <p className="">Log in to your account</p>
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
          <p className="sign-in-page__form__forgot-password">
            <Link to="#">Forgot password?</Link>
          </p>
          <div className="field">
            <input type="submit" value="Log in" className="sign-in-page__btn" />
          </div>
          <p className="sign-in-page__signup-link">
            New to Authors Haven? <Link to="/signup">Sign Up</Link>
          </p>
          <SocialLink message={"Sign in with"} />
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
