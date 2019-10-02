import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { setCurrentImage } from "../actions/";

const axiosOptions = {
  headers: {
    api_key: "g00dLuCk"
  }
};

function* fetchCurrentImage() {
  const result = yield axios(
    "http://localhost:3000/api/images",
    axiosOptions
  ).then(response => {
    return response.data;
  });

  yield put(setCurrentImage(result.image));
}

function* startFetchingCurrentImage() {
  yield takeEvery("START_FETCHING_CURRENT_IMAGE", fetchCurrentImage);
}

export default function* rootSaga() {
  yield all([startFetchingCurrentImage()]);
}
