import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "<common>/Input";
import "<styles>/SignUpPage.scss";
import logo from "<images>/Logo1.png";
import SocialLink from "<components>/SocialLinks";

const SignUpPage = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
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
            errors={errors.email}
            placeholder="Email address"
            handleChange={handleChange}
          />
          <Input
            icon="lock icon"
            type="password"
            name="password"
            value={password}
            errors={errors.password}
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
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
          <SocialLink message={"Sign up with"} />
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
  errors: PropTypes.object
};

export default SignUpPage;
