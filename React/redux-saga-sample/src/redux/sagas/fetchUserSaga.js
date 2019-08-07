import { put, takeEvery } from "redux-saga/effects";
import { FETCH_USER_DETAIL } from "../action-types";
import * as myApi from "../../services";
import { FetchUsersSuccess } from "../actions/userAction";
import { beginApiCall, apiCallError } from "../actions/apiActions";

export function* fetchUserSaga() {
  yield takeEvery(FETCH_USER_DETAIL, fetchData);
}

export function* fetchData({ id }) {
  yield put(beginApiCall());
  try {
    const users = yield myApi.MyService.find(id);
    const response = Array.isArray(users) ? users : [users];
    yield put(FetchUsersSuccess(response));
  } catch (error) {
    alert(error);
    yield put(apiCallError());
  }
}
