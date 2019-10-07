import { put } from "redux-saga/effects";
import { setCurrentImage } from "../actions/";
import instance from "../../axiosInstance"; 

function* fetchCurrentImage() {
  const result = yield instance("/images").then(response => {
    return response.data;
  }).catch(function (error) {
    console.log(error);
    return {image: {id: "", url: null}};
  });

  yield put(setCurrentImage(result.image));
}

export default fetchCurrentImage;
