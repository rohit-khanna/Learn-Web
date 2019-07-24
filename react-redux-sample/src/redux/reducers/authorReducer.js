import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";
import initialState from "./InitialState";

/**
 * Course Reducer
 * @param {*} state initialized to empty array as it will store array of courses 
 * @param {*} action 
 */
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
