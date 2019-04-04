import { combineReducers } from "redux";
import profileReducer from "./profile";
import articleReducer from "./articles";
import commentReducer from "./comments";
import reactionReducer from "./reactions";

export default combineReducers({
  profile: profileReducer,
  article: articleReducer,
  comment: commentReducer,
  reaction: reactionReducer
});
