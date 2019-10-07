import { takeEvery, all } from "redux-saga/effects";
import fetchCurrentImage from "./fetchCurrentImage";
import { START_FETCHING_CURRENT_IMAGE } from "../actions/types";

function* startFetchingCurrentImage() {
  yield takeEvery(START_FETCHING_CURRENT_IMAGE, fetchCurrentImage);
}

export default function* rootSaga() {
  yield all([startFetchingCurrentImage()]);
}
