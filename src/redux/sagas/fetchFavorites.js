import { put, call } from "redux-saga/effects";
import { setFavorites, setFavoritesStatus } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites(action) {
  const { onSuccess, onError } = action.payload;
  try {
    const response = yield call(instance.get, "/images/fav");

    if (response.status === 200) {
      onSuccess(null);
      yield put(setFavoritesStatus(true));
      yield put(setFavorites(response.data.images));
    } else {
      onError("Couldn't load favorites");
    }
  } catch (error) {
    onError("Couldn't load favorites");
  }
}

export default fetchFavorites;
