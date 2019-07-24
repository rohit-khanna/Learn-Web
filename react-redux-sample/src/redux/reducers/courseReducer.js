import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";
import initialState from "./InitialState";

/**
 * Course Reducer
 * @param {*} state initialized to empty array as it will store array of courses 
 * @param {*} action 
 */
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];

    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
