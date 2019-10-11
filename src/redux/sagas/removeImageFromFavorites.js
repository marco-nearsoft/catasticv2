import { put, call } from "redux-saga/effects";
import { removeFromFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* removeImageFromFavorites(action) {
  try {
    const response = yield call(
      instance.delete,
      `/images/fav/${action.payload.id}`
    );

    if (response.status === 200) {
      yield put(removeFromFavorites(action.payload));
    }
  } catch (error) {
    console.log(error);
  }
}

export default removeImageFromFavorites;
