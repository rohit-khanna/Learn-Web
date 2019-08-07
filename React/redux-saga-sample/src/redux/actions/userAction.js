import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAIL,
  FETCH_USER_DETAIL
} from "../action-types";
// import * as myApi from "../../services";
// import { beginApiCall, apiCallError } from "./apiActions";

//action-creator
export function FetchUsersSuccess(users) {
  return { type: LOAD_USERS_SUCCESS, users };
}

export function FetchUserDetail(id) {
  return { type: FETCH_USER_DETAIL, id };
}

//action-creator

export function FetchUsersFail() {
  return { type: LOAD_USERS_FAIL, users: [] };
}

// //thunk
// export function loadUsers(id) {
//   return async function(dispatch) {
//     try {
//       dispatch(beginApiCall());

//       const users = await myApi.MyService.find(id);
//       return dispatch(
//         FetchUsersSuccess(Array.isArray(users) ? users : [users])
//       );
//     } catch (error) {
//       alert(error);
//       dispatch(apiCallError());
//     }
//   };
// }
