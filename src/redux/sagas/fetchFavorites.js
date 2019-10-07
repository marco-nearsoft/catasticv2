import { put } from "redux-saga/effects";
import { setFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites() {
  const result = yield instance("/images/fav").then(response => {
    return response.data;
  });

  yield put(setFavorites(result.images));
}

export default fetchFavorites;
