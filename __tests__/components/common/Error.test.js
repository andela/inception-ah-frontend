import React from "react";
import Error from "../../../src/components/common/Error";

describe("Error Component", () => {
  const wrapper = shallow(<Error />);

  it("should render 1 <div> elements", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
