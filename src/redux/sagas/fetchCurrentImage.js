import { put, call } from "redux-saga/effects";
import { setCurrentImage, setErrorMessage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchCurrentImage() {
  try {
    const response = yield call(instance, "/images");

    if (response.status === 200) {
      yield put(setErrorMessage(null));
      yield put(setCurrentImage(response.data.image));
    } else {
      yield put(setErrorMessage("Couldn't load image"));
    }
  } catch (error) {
    yield put(setErrorMessage("Connectivity problems"));
  }
}

export default fetchCurrentImage;
