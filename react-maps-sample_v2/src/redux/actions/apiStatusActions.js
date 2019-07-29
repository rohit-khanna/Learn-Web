import { BEGIN_API_CALL, API_CALL_ERROR } from "../actions/actionTypes";

//action creator
export function beginApiCall() {
  return { type: BEGIN_API_CALL };
}
//action creator
export function apiCallError() {
  return { type: API_CALL_ERROR };
}
