import { combineReducers } from "redux";
import profileReducer from "./profile";
import articleReducer from "./articles";

export default combineReducers({
  profile: profileReducer,
  article: articleReducer
});
