import { FETCH_ROUTE_SUCCESS, FETCH_ROUTE_ERROR } from "../actions/actionTypes";
import initialState from "./InitialState";

/**
 * Reducer for ROute State
 * @param {*} state state
 * @param {*} action action
 */
export default function RouteReducer(state = initialState.routeResult, action) {
  switch (action.type) {
    case FETCH_ROUTE_SUCCESS:
    case FETCH_ROUTE_ERROR:
      return action.routeResult;

    default:
      return state;
  }
}
