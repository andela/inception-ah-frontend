import { RESOURCE_NOT_FOUND } from "<profileActions>/types/types";
import { SET_ERROR } from "<authActions>/types/types";
import {
  ADD_ARTICLE_REACTION,
  ADD_COMMENT_REACTION
} from "<reactionActions>/types/types";

const initialState = {};

const reactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE_REACTION: {
      const { articleNumberOfLikes, articleNumberOfDislikes } = action.payload;
      return {
        ...state,
        articleNumberOfLikes,
        articleNumberOfDislikes
      };
    }
    case ADD_COMMENT_REACTION: {
      const { commentNumberOfLikes, commentNumberOfDislikes } = action.payload;
      return {
        ...state,
        commentNumberOfLikes,
        commentNumberOfDislikes
      };
    }

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

export default reactionReducer;
