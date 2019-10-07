import { takeEvery, all } from "redux-saga/effects";
import fetchCurrentImage from "./fetchCurrentImage";
import { START_FETCHING_CURRENT_IMAGE } from "../actions/types";

function* fetchFavorites() {
  const result = yield axios(
    "http://localhost:3000/api/images/fav",
    axiosOptions
  ).then(response => {
    return response.data;
  });

  yield put(setFavorites(result.images));
}

function* startFetchingCurrentImage() {
  yield takeEvery(START_FETCHING_CURRENT_IMAGE, fetchCurrentImage);
}

function* startFetchingFavorites() {
  yield takeEvery("START_FETCHING_FAVORITES", fetchFavorites);
}

export default function* rootSaga() {
  yield all([startFetchingCurrentImage(), startFetchingFavorites()]);
}
