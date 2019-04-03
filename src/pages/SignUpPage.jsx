import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "<components>/common/Input";
import "<assets>/styles/SignUpPage.scss";
import SocialLink from "<components>/SocialLinks";
import NavigationBar from "<components>/common/NavigationBar";

const SignUpPage = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit,
  errors,
  isActive
}) => {
  return (
    <div className="sign-up-page">
      <NavigationBar />

      <div className="sign-up-page__form-container">
        <p className="sign-up-page__heading">
          Sign up for free to start sharing your inspiration and story on
          authors haven
        </p>
        <form className="ui form sign-up-page__form" onSubmit={handleSubmit}>
          <Input
            icon="user icon"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="firstName"
            handleChange={handleChange}
            errors={errors.firstName}
          />
          <Input
            icon="user icon"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="lastName"
            handleChange={handleChange}
            errors={errors.lastName}
          />
          <Input
            icon="envelope icon"
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            handleChange={handleChange}
            errors={errors.email}
          />
          <Input
            icon="lock icon"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={handleChange}
            errors={errors.password || ""}
          />
          <div className="field">
            <input
              disabled={isActive}
              type="submit"
              value="Sign Up"
              className="sign-up-page__btn"
            />
          </div>
          <p className="sign-up-page__signup-link">
            Already have an account? <Link to="#">Log In</Link>
          </p>
          <SocialLink />
        </form>
      </div>
    </div>
  );
};

SignUpPage.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  isActive: PropTypes.bool
};

export default SignUpPage;
