import { put, call } from "redux-saga/effects";
import { addImageToFavorites, setErrorMessage } from "../actions/";
import instance from "../../axiosInstance";

function* likeImageOnServer(action) {
  const id = action.payload.image ? action.payload.image.id : null;
  if (id) {
    try {
      const response = yield call(
        instance.post,
        `/images/fav/${id}`
      );

      if (response.status === 200) {
        yield put(setErrorMessage(null));
        if (action.payload.isFavoritesInfoReady) {
          yield put(addImageToFavorites(response.data.image));
        }
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

export default likeImageOnServer;
