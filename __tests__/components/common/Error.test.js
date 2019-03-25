import React from "react";
import { Enzyme } from "../../setup.config";
import Error from "<common>/Error";

const { shallow } = Enzyme;

describe("Error Component", () => {
  const wrapper = shallow(<Error />);

  it("should render 1 <div> elements", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
