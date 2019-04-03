import React from "react";
import { Enzyme } from "../setup.config";
import SocialLink from "<components>/SocialLinks";

const { shallow } = Enzyme;

const wrapper = shallow(<SocialLink />);

describe("SocialLink", () => {
  it("should render a Social Link Component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should render 1 <div> element", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render 1 <span> element", () => {
    expect(wrapper.find("span").length).toEqual(1);
  });

  it("should render 2 <a> tag", () => {
    expect(wrapper.find("a").length).toEqual(2);
  });
  
  it("should render 2 <img> tag", () => {
    expect(wrapper.find("img").length).toEqual(2);
  });
});
