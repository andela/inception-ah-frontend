import React from "react";
import Input from "../../../src/components/common/Input";
import { Enzyme } from "../../../setup.config";

const { shallow } = Enzyme;

const setup = props => {
  const defaultProps = {
    type: "text",
    placeholder: "firstName",
    name: "name",
    value: "value",
    className: "className",
    handleChange: () => {}
  };

  const wrapper = shallow(<Input {...defaultProps} {...props} />);

  return wrapper;
};

describe("Input Component", () => {
  const wrapper = setup();

  it("should render 2 <div> elements", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render 1 <input> element", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("should allow us to set type props", () => {
    const { type } = wrapper.props().children[0].props.children[0].props;
    expect(type).toEqual("text");
  });

  it("should allow us to set placeholder props", () => {
    const { placeholder } = wrapper.props().children[0].props.children[0].props;
    expect(placeholder).toEqual("firstName");
  });

  it("should allow us to set name props", () => {
    const { name } = wrapper.props().children[0].props.children[0].props;
    expect(name).toEqual("name");
  });

  it("should allow us to set value props", () => {
    const { value } = wrapper.props().children[0].props.children[0].props;
    expect(value).toEqual("value");
  });

  it("should allow us to set className props", () => {
    const { className } = wrapper.props().children[0].props.children[0].props;
    expect(className).toEqual("className");
  });

  it("should allow us to set handleChange props", () => {
    const handleChange = jest.fn();
    const changedWrapper = setup({ handleChange });
    const input = changedWrapper.find("input");
    input.simulate("change", { target: { value: "Test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // it("should set a default type props if not specified", () => {
  //   // eslint-disable-next-line no-const-assign
  //   // eslint-disable-next-line no-shadow
  //   let wrapper = shallow(<Input placeholder="" />);
  //   console.log("wrapper", wrapper.props().children[0].props.children[0].props);
  //   // const { type } = wrapper.props().children[0].props.children[0].props;
  //   // expect(type).toEqual("text");
  // });

  // it("should set a default placeholder props if not specified", () => {
  //   console.log("wrapper", wrapper.props().children[0].props.children[0].props);
  //   const { placeholder } = wrapper.props().children[0].props.children[0].props;
  //   expect(placeholder).toEqual("firstName");
  // });
});
