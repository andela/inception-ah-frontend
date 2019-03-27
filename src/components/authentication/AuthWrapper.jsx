import React, { Component } from "react";
import validateInput, { isNotValid } from "<utils>/validation";

export const AuthWrapper = AuthComponent => {
  return class newComponent extends Component {
    state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      middleName: "",
      imageURL: "",
      biography: "",
      mobileNumber: "",
      gender: "",
      errors: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: ""
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
      return (
        <AuthComponent
          state={this.state}
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
