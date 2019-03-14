import React from "react";
import SignUpPage from "@/pages/SignUpPage";
import { Enzyme } from "./setup.config";

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
  });
});
