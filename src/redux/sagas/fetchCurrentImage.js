import { put, call } from "redux-saga/effects";
import { setCurrentImage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchCurrentImage(action) {
  const { onSuccess, onError } = action.payload;
  try {
    const response = yield call(instance, "/images");

    if (response.status === 200) {
      onSuccess(null);
      yield put(setCurrentImage(response.data.image));
    } else {
      onError("Couldn't load image");
    }
  } catch (error) {
    onError("Couldn't load image");
  }
}

export default fetchCurrentImage;
