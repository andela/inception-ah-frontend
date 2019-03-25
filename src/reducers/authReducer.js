import actionTypes from "<actions>/auth/types";

const initialState = {
  isAuthenticated: false,
  error: "",
  authMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        errors: action.error
      };
    case actionTypes.VERIFY_USER:
      return {
        ...state,
        authMessage: action.payload
      };
    default:
      return state;
  }
};
