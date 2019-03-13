import React from "react";
import SignInPage from "../../src/pages/SignInPage";

describe("SignInPage", () => {
  const wrapper = shallow(<SignInPage />);

  it("should contain 5 <div /> elements", () => {
    expect(wrapper.find("div").length).toEqual(5);
  });

  it("should contain a <form /> element", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should contain 4 <p /> elements", () => {
    expect(wrapper.find("p").length).toEqual(4);
  });

  it("should contain 1 <input /> elements", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("should contain 1 <span /> elements", () => {
    expect(wrapper.find("span").length).toEqual(1);
  });
});
