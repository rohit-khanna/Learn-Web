import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./actionTypes";
import CourseService from "../../service/CourseService";
import AuthorService from "../../service/AuthorService";

//action-creator
export function createCourseSuccess(course) {
  return { type: CREATE_COURSE, course };
}

//action-creator
export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

//thunk
export function loadCourses() {
  return async function(dispatch) {
    try {
      const courses = await CourseService.findAllAsync();
      return dispatch(loadCoursesSuccess(courses));
    } catch (error) {
      alert("Error");
    }
  };
}

//thunk
export function createCourse(course) {
  return async function(dispatch) {
    try {
      const response = await CourseService.saveAsync(course);
      return dispatch(createCourseSuccess(response));
    } catch (error) {
      alert(error);
    }
  };
}
