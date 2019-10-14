import { put, call } from "redux-saga/effects";
import { removeFromFavorites, setErrorMessage } from "../actions/";
import instance from "../../axiosInstance";

function* removeImageFromFavorites(action) {
  if (action.payload.id) {
    try {
      const response = yield call(
        instance.delete,
        `/images/fav/${action.payload.id}`
      );

      if (response.status === 200) {
        yield put(setErrorMessage(null));
        yield put(removeFromFavorites(action.payload));
      } else {
        yield put(setErrorMessage("Connectivity problems"));
      }
    } catch (error) {
      yield put(setErrorMessage("Connectivity problems"));
      console.log(error);
    }
  }
}

export default removeImageFromFavorites;
