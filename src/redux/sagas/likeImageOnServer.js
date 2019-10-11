import { put, call } from "redux-saga/effects";
import { addImageToFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites(action) {
  try {
    const response = yield call(instance.post, `/images/fav/${action.payload.id}`);

    if (response.status === 200) {
      yield put(addImageToFavorites(response.data.image));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchFavorites;
