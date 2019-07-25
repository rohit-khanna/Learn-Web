import {
  CREATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from "../actions/actionTypes";
import initialState from "./InitialState";

/**
 * Course Reducer
 * @param {*} state initialized to empty array as it will store array of courses 
 * @param {*} action 
 */
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];

    case UPDATE_COURSE_SUCCESS:
      return state.map(
        crs => (crs.id === action.course.id ? action.course : crs)
      );

    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
