import { put, call } from "redux-saga/effects";
import { setCurrentImage } from "../actions/";
import instance from "../../axiosInstance";

function* fetchCurrentImage() {
  let image;
  try {
    const response = yield call(instance, "/images");

    if (response.status === 200) {
      image = response.data.image;
    } else {
      image = { id: null, url: null };
    }
  } catch (error) {
    console.log(error);
    image = { id: null, url: null };
  }

  yield put(setCurrentImage(image));
}

export default fetchCurrentImage;
