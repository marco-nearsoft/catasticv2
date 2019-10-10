import { put, call } from "redux-saga/effects";
import { setFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites() {
  const response = yield call(instance.get, "/images/fav");

  const result = response.data;

  yield put(setFavorites(result.images));
}

export default fetchFavorites;
