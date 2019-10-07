import { put } from "redux-saga/effects";
import axios from "axios";
import { setFavorites } from "../actions/";
import constants from "../../constants/";

function* fetchFavorites() {
  const result = yield axios(
    "http://localhost:3000/api/images/fav",
    constants.axiosOptions
  ).then(response => {
    return response.data;
  });

  yield put(setFavorites(result.images));
}

export default fetchFavorites;
