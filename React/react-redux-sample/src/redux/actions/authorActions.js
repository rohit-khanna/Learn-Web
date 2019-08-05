import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import AuthorService from "../../service/AuthorService";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//action-creator
export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

//thunk
export function loadAuthors() {
  return async function(dispatch) {
    try {
      dispatch(beginApiCall());
      const authors = await AuthorService.findAllAsync();
      return dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      alert("Error");
      dispatch(apiCallError());
    }
  };
}
