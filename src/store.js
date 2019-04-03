import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import auth from "./reducers/authReducer";

const store = createStore(
  combineReducers({}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
