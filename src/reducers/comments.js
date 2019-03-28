import { RESOURCE_NOT_FOUND } from "<profileActions>/types/types";
import { SET_ERROR } from "<authActions>/types/types";
import {
  ADD_COMMENT, FETCH_ALL_COMMENTS
} from "<commentActions>/types/types";

const initialState = {
  commentData: {},
  errors: [],
  allAvailableComments: []
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        commentData: action.payload
      };
    case FETCH_ALL_COMMENTS:
      return {
        ...state,
        allAvailableComments: action.payload
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
    default:
      return state;
  }
};

export default commentReducer;
