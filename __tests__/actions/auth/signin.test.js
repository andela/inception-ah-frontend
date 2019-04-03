import moxios from "moxios";
import signInUser from "../../../src/actions/auth/signinActions";
import actionTypes from "../../../src/actions/auth/types/types";
import userData from "../../__mock__/userData";

describe("user authentication actions Signin", () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = storeMock({});
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should call the signin success dispatch function", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userData.signInSuccessResponse
      });
    });
    const expectedActions = [
      { type: actionTypes.SET_CURRENT_USER }
    ];

    await store.dispatch(signInUser(userData.signinUserRequestData, () => 5));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  // it("should call the signup failure dispatch function", async done => {
  //   const { message: error } = userData.signUpFailureResponse;
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 409,
  //       response: userData.signUpFailureResponse
  //     });
  //   });
  //   const expectedActions = [{ type: actionTypes.SET_ERROR, error }];

  //   await store.dispatch(signUpUser(userData.userRequestData));
  //   expect(store.getActions()).toEqual(expectedActions);
  //   done();
  // });
});
