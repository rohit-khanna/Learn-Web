import { LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from "../action-types";
import { InitialState } from "../initialState";

export default function UserReducer(state = InitialState.users, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return action.users;

    case LOAD_USERS_FAIL:
      return state;

    default:
      return state;
  }
}
