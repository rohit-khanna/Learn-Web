import { combineReducers } from "redux";
import apiStatusReducer from "./apiStatusReducer";
import routeReducer from "./routeReducer";

const rootReducer = combineReducers({
  routeResult: routeReducer,
  apiCallsInProgress: apiStatusReducer
});

export default rootReducer;
