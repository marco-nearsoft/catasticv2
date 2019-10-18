import { put, call } from "redux-saga/effects";
import { setFavorites, setFavoritesStatus } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites(action) {
  const { onSuccess, onError } = action.payload;
  try {
    const response = yield call(instance.get, "/images/fav");

    if (response.status === 200) {
      onSuccess();
      yield put(setFavoritesStatus(true));
      yield put(setFavorites(response.data.images));
    } else {
      onError();
    }
  } catch (error) {
    onError();
  }
}

export default fetchFavorites;
