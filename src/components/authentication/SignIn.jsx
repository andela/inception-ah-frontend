import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignInPage from "<pages>/SignInPage";
import AuthWrapper from "<auth>/AuthWrapper";
import signInUser from "<authActions>/signinActions";

class SignInWrapper extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.props.state;
    const { loginUser, history, state: { from } } = this.props;
    loginUser({ email, password }, history, from);
  }

  render() {
    const { email, errors, password } = this.props.state;
    return (
      <SignInPage
        email={email}
        errors={errors}
        password={password}
        handleChange={this.props.handleChange}
        handleSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

SignInWrapper.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  loginUser: PropTypes.func,
  errors: PropTypes.object,
  state: PropTypes.object,
  history: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data, history) => dispatch(signInUser(data, history))
  };
};

export default AuthWrapper(
  connect(
    null,
    mapDispatchToProps
  )(SignInWrapper)
);
