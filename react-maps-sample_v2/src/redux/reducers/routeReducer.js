import { FETCH_ROUTE_SUCCESS } from "../actions/actionTypes";
import initialState from "./InitialState";

/**
 * Reducer for ROute State
 * @param {*} state state
 * @param {*} action action
 */
export default function RouteReducer(state = initialState.routeResult, action) {
  switch (action.type) {
    case FETCH_ROUTE_SUCCESS:
      return action.routeResult;

    default:
      return state;
  }
}
