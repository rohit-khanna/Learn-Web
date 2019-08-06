import { FETCH_API_FAIL, FETCH_API_SUCCESS } from "../action-types";
import { InitialState } from "../initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

const APIStatusReducer = (
  state = InitialState.apiCallCountInProgress,
  action
) => {
  if (action.type === FETCH_API_SUCCESS) {
    return state + 1;
  } else if (
    action.type === FETCH_API_FAIL ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  } else return state;
};

export default APIStatusReducer;
