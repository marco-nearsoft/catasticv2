import { put, call } from "redux-saga/effects";
import { setCurrentImage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchCurrentImage(action) {
  const { onSuccess, onError } = action.payload;
  try {
    const response = yield call(instance, "/images");

    if (response.status === 200) {
      onSuccess();
      yield put(setCurrentImage(response.data.image));
    } else {
      onError();
    }
  } catch (error) {
    onError();
  }
}

export default fetchCurrentImage;
