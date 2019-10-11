import { takeEvery, all } from "redux-saga/effects";
import fetchCurrentImage from "./fetchCurrentImage";
import fetchFavorites from "./fetchFavorites";
import removeImageFromFavorites from "./removeImageFromFavorites";
import { START_FETCHING_CURRENT_IMAGE, START_FETCHING_FAVORITES, START_REMOVING_FROM_FAVORITES } from "../actions/types";

function* startFetchingCurrentImage() {
  yield takeEvery(START_FETCHING_CURRENT_IMAGE, fetchCurrentImage);
}

function* startFetchingFavorites() {
  yield takeEvery(START_FETCHING_FAVORITES, fetchFavorites);
}

function* startRemovingImageFromFavorites() {
  yield takeEvery(START_REMOVING_FROM_FAVORITES, removeImageFromFavorites);
}

export default function* rootSaga() {
  yield all([startFetchingCurrentImage(), startFetchingFavorites(), startRemovingImageFromFavorites()]);
}
