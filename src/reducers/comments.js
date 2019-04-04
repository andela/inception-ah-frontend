import { RESOURCE_NOT_FOUND } from "<profileActions>/types/types";
import { SET_ERROR } from "<authActions>/types/types";
import { ADD_COMMENT, FETCH_ALL_COMMENTS } from "<commentActions>/types/types";
import { ADD_COMMENT_REACTION } from "<reactionActions>/types/types";

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
        allAvailableComments: [...state.allAvailableComments, action.payload]
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
    case ADD_COMMENT_REACTION: {
      const { commentNumberOfLikes, commentId } = action.payload;

      const newState = [...state.allAvailableComments];
      const singleComment = newState.find(comment => comment.id === commentId);
      const commentIndex = newState.indexOf(singleComment);

      const newComment = {
        ...singleComment,
        numberOfLikes: commentNumberOfLikes
      };

      newState[commentIndex] = newComment;

      return {
        ...state,
        allAvailableComments: [...newState]
      };
    }
    default:
      return state;
  }
};

export default commentReducer;
