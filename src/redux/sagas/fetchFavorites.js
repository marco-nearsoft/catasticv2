import { put, call } from "redux-saga/effects";
import { setFavorites, setErrorMessage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites() {
  let images;
  try {
    const response = yield call(instance.get, "/images/fav");

    if (response.status === 200) {
      yield put(setErrorMessage(null));
      images = response.data.images;
    } else {
      yield put(setErrorMessage("Couldn't load favorites"));
      images = [];
    }
  } catch (error) {
    yield put(setErrorMessage("Connectivity problems"));
    images = [];
  }

  yield put(setFavorites(images));
}

export default fetchFavorites;
