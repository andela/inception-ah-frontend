import { LOAD_PROFILE, UPDATE_PROFILE } from "<profileActions>/types/types";
import { SET_ERROR } from "<authActions>/types/types";

const initialState = {
  profileData: {},
  errors: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        profileData: action.payload
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profileData: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
