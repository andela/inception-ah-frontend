import React, { Component } from "react";
import validateInput, { isNotValid } from "<utils>/validation";

export const AuthWrapper = AuthComponent => {
  return class newComponent extends Component {
    state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errors: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      }
    };

    handleChange = e => {
      const { name, value } = e.target;
      e.persist();
      this.setState({
        errors: validateInput(this.state, e),
        [name]: value
      });
    };

    clearFields = () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      });
    };

    render() {
      const authData = this.state;
      return (
        <AuthComponent
          authData={authData}
          {...this.props}
          isNotValid={isNotValid}
          handleChange={this.handleChange}
          clearFields={this.clearFields}
        />
      );
    }
  };
};

export default AuthWrapper;
