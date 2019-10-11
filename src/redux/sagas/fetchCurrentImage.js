import { put, call } from "redux-saga/effects";
import { setCurrentImage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchCurrentImage() {
  try {
    const response = yield call(instance, "/images");

    if (response.status === 200) {
      yield put(setCurrentImage(response.data.image));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchCurrentImage;
