import { FETCH_API_SUCCESS, FETCH_API_FAIL } from "../action-types";

export function beginApiCall() {
  return { type: FETCH_API_SUCCESS };
}

//action creator
export function apiCallError() {
  return { type: FETCH_API_FAIL };
}
