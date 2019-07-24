import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import AuthorService from "../../service/AuthorService";

//action-creator
export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

//thunk
export function loadAuthors() {
  return async function(dispatch) {
    try {
      const authors = await AuthorService.findAllAsync();
      return dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      alert("Error");
    }
  };
}
