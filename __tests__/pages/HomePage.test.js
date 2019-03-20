import React from "react";
<<<<<<< HEAD:__tests__/pages/HomePage.test.js
<<<<<<< HEAD:__tests__/HomePage.test.js
import Homepage from "@/pages/Homepage";
import { Enzyme } from "./setup.config";
=======
import Homepage from "../../src/pages/Homepage";
import { Enzyme } from "../../setup.config";
>>>>>>> feat(authsignup):  user should be able to signup:__tests__/pages/HomePage.test.js
=======
import Homepage from "../src/pages/Homepage";
import { Enzyme } from "../setup.config";
>>>>>>> feat(authsignup):  user should be able to signup:__tests__/HomePage.test.js

const { shallow } = Enzyme;

describe("HomePage", () => {
  it("should contain h1 element", () => {
    const homePageShallow = shallow(<Homepage />);
    expect(homePageShallow
      .contains(
        <h1 className="app">Welcome to Inception General Authors Haven</h1>,
      ))
      .toBe(true);
  });
});
