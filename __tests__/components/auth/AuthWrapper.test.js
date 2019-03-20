import React from "react";
<<<<<<< HEAD:__tests__/components/auth/AuthWrapper.test.js
import { AuthWrapper } from "../../src/components/auth/AuthWrapper";
import { Enzyme } from "../../setup.config";
=======
import { AuthWrapper } from "../src/components/auth/AuthWrapper";
import { Enzyme } from "../setup.config";
>>>>>>> feat(authsignup):  user should be able to signup:__tests__/AuthWrapper.test.js

const { mount } = Enzyme;

const mockHandleSubmit = () => ({
  preventDefault: jest.fn()
});

const state = {
  email: "",
  password: "",
  firstName: "",
  lastName: ""
};

const handleChange = (name, value) => ({
  target: {
    name,
    value
  }
});

const history = {
  push: jest.fn()
};

const match = {
  params: {
    page: "/signup"
  }
};

const props = {
  mockHandleSubmit,
  handleChange,
  history,
  state,
  match
};
describe("AuthWrapper Component", () => {
  it("should render an instance of AuthWrapper", () => {
    const wrapper = mount(<AuthWrapper {...props} />);
    const instance = wrapper.instance();
    expect(instance).toBeDefined();
    expect(instance).toBeInstanceOf(AuthWrapper);
  });

  it("should call handleSubmit", () => {
    const wrapper = mount(<AuthWrapper {...props} />);
    const instance = wrapper.instance();
    const handledSubmit = instance.props.mockHandleSubmit();
    expect(handledSubmit).toBeDefined();
  });
  it("should call handleChange", () => {
    const wrapper = mount(<AuthWrapper {...props} />);
    const instance = wrapper.instance();
    const handledChange = instance.props.handleChange();
    expect(handledChange).toBeDefined();
  });

  it("should call handleSubmit", () => {
    const wrapper = mount(<AuthWrapper {...props} />);
    const instance = wrapper.instance();
    const handledSubmit = instance.props.mockHandleSubmit();
    expect(handledSubmit).toBeDefined();
  });
});
