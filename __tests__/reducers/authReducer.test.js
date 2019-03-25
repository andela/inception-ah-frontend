import reducers from "../../src/reducers/authReducer";
import actionTypes from "../../src/actions/auth/types";

describe("AuthReducer test", () => {
  it("should return the initial state ", () => {

    expect(reducers(undefined, {})).toEqual({
      isAuthenticated: false,
      error: "",
      authMessage: ""
    });
  });

  it("should handle SET_CURRENT_USER", () => {

    expect(
      reducers(
        {},
        {
          type: actionTypes.SET_CURRENT_USER
        }
      )
    ).toEqual({
      isAuthenticated: true
    });
  });

  it("should handle VERIFY_USER", () => {
    const payload = "Verification Successful!";

    expect(
      reducers(
        {},
        {
          type: actionTypes.VERIFY_USER,
          payload
        }
      )
    ).toEqual({
      authMessage: "Verification Successful!"
    });
  });

  it("should handle SET_ERROR", () => {
    const error = "Sorry an error occurred";

    expect(
      reducers(
        {},
        {
          type: actionTypes.SET_ERROR,
          error
        }
      )
    ).toEqual({
      errors: "Sorry an error occurred"
    });
  });
});
