import { combineReducers } from "redux";
import profileReducer from "./profile";
import articleReducer from "./articles";
import commentReducer from "./comments";

export default combineReducers({
  profile: profileReducer,
  article: articleReducer,
  comment: commentReducer,
});
