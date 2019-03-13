import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const storeMock = configureMockStore(middleware);

global.React = React;
global.storeMock = storeMock;
global.shallow = shallow;
global.mount = mount;
