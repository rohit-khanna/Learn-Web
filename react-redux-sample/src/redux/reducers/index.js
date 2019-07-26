import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
