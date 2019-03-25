import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import signUpUser from "<actions>/auth/signup";
import actionTypes from "<actions>/auth/types";
import userData from "<mock>/userData";

const middleware = [thunk];
const storeMock = configureMockStore(middleware);

describe("user authentication actions Signup", () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = storeMock({});
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should call the signup success dispatch function", async done => {
    const { message: payload } = userData.signUpSuccessResponse;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: userData.signUpSuccessResponse
      });
    });
    const expectedActions = [{ type: actionTypes.VERIFY_USER, payload }];
    await store.dispatch(signUpUser(userData.userRequestData));

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("should call the signup failure dispatch function", async done => {
    const { message: error } = userData.signUpFailureResponse;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 409,
        response: userData.signUpFailureResponse
      });
    });
    const expectedActions = [{ type: actionTypes.SET_ERROR, error }];
    await store.dispatch(signUpUser(userData.userRequestData));
    
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
