import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import APIStatusReducer from "./apiStatusReducer";

const RootReducer = combineReducers({
  users: UserReducer,
  apiCallsInProgress: APIStatusReducer
});

export default RootReducer;
