import { BEGIN_API_CALL } from "../actions/actionTypes";

//action creator
export function beginApiCall() {
  return { type: BEGIN_API_CALL };
}
