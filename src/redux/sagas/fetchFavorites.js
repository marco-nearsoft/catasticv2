import { put, call } from "redux-saga/effects";
import { setFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites() {
  let images;
  try {
    const response = yield call(instance.get, "/images/fav");

    if (response.status === 200) {
      images = response.data.images;
    } else {
      console.log(response);
      images = [];
    }
  } catch (error) {
    console.log(error);
    images = [];
  }

  yield put(setFavorites(images));
}

export default fetchFavorites;
