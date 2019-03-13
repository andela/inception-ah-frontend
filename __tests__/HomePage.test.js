import React from "react";
import { Enzyme } from "./setup.config";
import Homepage from "@/pages/Homepage";

const { shallow } = Enzyme;

describe("HomePage", () => {
  it("should contain h1 element", () => {
    const homePageShallow = shallow(<Homepage />);
    expect(
      homePageShallow.contains(
        <h1 className="app">Welcome to Inception General Authors Haven</h1>,
      ),
    ).toBe(true);
  });
});
