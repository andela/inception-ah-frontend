import { RESOURCE_NOT_FOUND } from "<profileActions>/types/types";
import { SET_ERROR } from "<authActions>/types/types";
import {
  FETCH_ARTICLE_BY_SLUG,
  FETCH_ARTICLES_BY_CATEGORY,
  FETCH_ALL_ARTICLES
} from "<articleActions>/types/types";

const initialState = {
  articleData: {},
  errors: [],
  allAvailableArticles: []
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BY_SLUG:
      return {
        ...state,
        articleData: action.payload
      };
    case FETCH_ARTICLES_BY_CATEGORY:
      return {
        ...state,
        articleData: action.payload
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

    case FETCH_ALL_ARTICLES:
      return {
        ...state,
        allAvailableArticles: action.payload
      };
    default:
      return state;
  }
};

export default articleReducer;
