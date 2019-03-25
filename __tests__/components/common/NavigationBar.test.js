import React from "react";
import { Enzyme } from "../../setup.config";
import NavigationBar from "<common>/NavigationBar";

const { shallow } = Enzyme;

describe("NavigationBar Component", () => {
  const wrapper = shallow(<NavigationBar />);

  it("should render 1 <div> elements", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render 2 <Link> element", () => {
    expect(wrapper.find("Link").length).toEqual(2);
  });

  it("should render 1 <span> element", () => {
    expect(wrapper.find("span").length).toEqual(1);
  });

  it("should render 1 <img> element", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });
});
