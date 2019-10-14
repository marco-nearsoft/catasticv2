import { put, call } from "redux-saga/effects";
import { addImageToFavorites, setErrorMessage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchFavorites(action) {
  if (action.payload.id) {
    try {
      const response = yield call(
        instance.post,
        `/images/fav/${action.payload.id}`
      );

      if (response.status === 200) {
        yield put(setErrorMessage(null));
        yield put(addImageToFavorites(response.data.image));
      } else {
        yield put(setErrorMessage("Couldn't mark image as liked"));
        console.log(response);
      }
    } catch (error) {
      yield put(setErrorMessage("Connectivity problems"));
      console.log(error);
    }
  }
}

export default fetchFavorites;
