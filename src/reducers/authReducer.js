import {
  SET_CURRENT_USER,
  SET_ERROR,
  VERIFY_USER
} from "../actions/auth/types/types";

const initialState = {
  isAuthenticated: false,
  errors: "",
  authMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true
      };
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    case VERIFY_USER:
      return {
        ...state,
        authMessage: action.payload
      };
    default:
      return state;
  }
};
