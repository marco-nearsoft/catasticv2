import { put, call } from "redux-saga/effects";
import { removeFromFavorites } from "../actions/";
import instance from "../../axiosInstance";

function* removeImageFromFavorites(action) {
  const { onSuccess, onError, image } = action.payload;
  const { id } = image;
  if (!id) {
    return;
  }
  try {
    const response = yield call(instance.delete, `/images/fav/${id}`);

    if (response.status === 200) {
      onSuccess();
      yield put(removeFromFavorites(image));
    } else {
      onError();
    }
  } catch (error) {
    onError();
    console.log(error);
  }
}

export default removeImageFromFavorites;
