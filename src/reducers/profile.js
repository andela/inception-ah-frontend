import {
  LOAD_PROFILE,
  UPDATE_PROFILE,
  RESOURCE_NOT_FOUND,
  LOAD_LOGGED_IN_PROFILE,
  FOLLOW_USER,
  VERIFY_FOLLOW_USER
} from "<profileActions>/types/types";
import { SET_ERROR } from "<authActions>/types/types";

const initialState = {
  profileData: {},
  errors: [],
  followStatus: null,
  loggedInProfileData: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        profileData: action.payload,
        guestProfileData: action.guestPayload
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profileData: action.payload
      };

    case LOAD_LOGGED_IN_PROFILE:
      return {
        ...state,
        loggedInProfileData: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    case RESOURCE_NOT_FOUND:
      return {
        ...state,
        errors: "Request Resource is Not Found"
      };

    case FOLLOW_USER:
      return {
        ...state,
        followStatus: action.payload
      };

    case VERIFY_FOLLOW_USER:
      return {
        ...state,
        followStatus: action.payload
      };

    default:
      return state;
  }
};

export default profileReducer;
