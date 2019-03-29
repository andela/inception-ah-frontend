import React from "react";
import SignUpPage from "../src/pages/SignUpPage";
import { Enzyme } from "../setup.config";

const { shallow } = Enzyme;

describe("SignUpPage", () => {
  it("should contain p tag element", () => {
    const signUpPageShallow = shallow(<SignUpPage />);
    expect(signUpPageShallow
      .contains(
        <p className="sign-up-page__heading">
          Sign up for free to start sharing your inspiration and story on
          authors haven
        </p>,
      ))
      .toBe(true);

const handleChange = jest.fn();
const handleSubmit = jest.fn();
// const bindValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   errors: {},
// };

const { shallow } = Enzyme;

const props = {
  type: "text",
  placeholder: "firstName",
  name: "name",
  value: "value",
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  },
  className: "className",
  handleChange: () => {},
  handleSubmit: () => {}
};

describe("SignUpPage", () => {
  describe("render components", () => {
    const wrapper = shallow(<SignUpPage {...props} />);
    it("should render Signup page", () => {
      expect(wrapper.length).toEqual(1);
    });

    it("should render 3 <div> elements", () => {
      expect(wrapper.find("div").length).toEqual(3);
    });

    // it("should render 3 <img> elements", () => {
    //   expect(wrapper.find("img").length).toEqual(3);
    // });

    it("should render 2 <p> elements", () => {
      expect(wrapper.find("p").length).toEqual(2);
    });

    it("should render 1 <form> element", () => {
      expect(wrapper.find("form").length).toEqual(1);
    });

    it("should contain p tag element", () => {
      expect(
        wrapper.contains(
          <p className="sign-up-page__heading">
            Sign up for free to start sharing your inspiration and story on
            authors haven
          </p>
        )
      ).toBe(true);
    });
  });

  describe("Simulate handleChange and handleSubmit", () => {
    it("should render without errors and submit the form", () => {
      const wrapper = shallow(
        <SignUpPage
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          {...props}
        />
      );
      expect(wrapper).toMatchSnapshot();
      wrapper.find("[name=\"firstName\"]").simulate("change", {
        target: { value: "john" }
      });
      wrapper.find("[name=\"lastName\"]").simulate("change", {
        target: { value: "doe" }
      });
      wrapper.find('[name="email"]').simulate("change", {
        target: { value: "john@gmail.com" }
      });
      wrapper.find('[name="password"]').simulate("change", {
        target: { value: "Password" }
      });
      wrapper.find("form").simulate("submit");
    });
  });
});
