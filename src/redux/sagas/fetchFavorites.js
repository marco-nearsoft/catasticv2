import { put, call } from "redux-saga/effects";
import { setFavorites, setErrorMessage, setFavoritesStatus } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites() {
  try {
    const response = yield call(instance.get, "/images/fav");

    if (response.status === 200) {
      yield put(setErrorMessage(null));
      yield put(setFavoritesStatus(true));
      yield put(setFavorites(response.data.images));
    } else {
      yield put(setErrorMessage("Couldn't load favorites"));
    }
  } catch (error) {
    yield put(setErrorMessage("Connectivity problems"));
  }
}

export default fetchFavorites;
