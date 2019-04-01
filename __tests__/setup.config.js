import Enzyme from "enzyme";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const storeMock = configureMockStore(middleware);

global.storeMock = storeMock;

export { Enzyme };
