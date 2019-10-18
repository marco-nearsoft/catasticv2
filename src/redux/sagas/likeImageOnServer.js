import { put, call } from "redux-saga/effects";
import { addImageToFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* likeImageOnServer(action) {
  const { onSuccess, onError, image } = action.payload;
  const id = image ? image.id : null;
  if (!id) {
    return;
  }
  try {
    const response = yield call(instance.post, `/images/fav/${id}`);

    if (response.status === 200) {
      onSuccess();
      if (action.payload.isFavoritesInfoReady) {
        yield put(addImageToFavorites(response.data.image));
      }
    } else {
      onError();
      console.log(response);
    }
  } catch (error) {
    onError();
    console.log(error);
  }
}

export default likeImageOnServer;
