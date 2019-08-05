import { BEGIN_API_CALL, API_CALL_ERROR } from "../actions/actionTypes";
import initialState from "./InitialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

/**
 * Course Reducer
 * @param {*} state initialized to empty array as it will store array of courses
 * @param {*} action
 */
export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  } else return state;
}
