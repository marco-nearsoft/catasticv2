import { put, call } from "redux-saga/effects";
import { setCurrentImage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchCurrentImage() {
  const response = yield call(instance, "/images");

  const result = response.data;

  yield put(setCurrentImage(result.image));
}

export default fetchCurrentImage;
