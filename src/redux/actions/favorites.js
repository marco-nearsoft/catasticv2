import { SET_FAVORITES } from "./types";
import { START_FETCHING_FAVORITES } from "./types";
import { REMOVE_FROM_FAVORITES } from "./types";

function setFavorites(payload) {
  return { type: SET_FAVORITES, payload };
}

function startFetchingFavorites(payload) {
  return { type: START_FETCHING_FAVORITES, payload };
}

function removeFromFavorites(payload) {
  return { type: REMOVE_FROM_FAVORITES, payload };
}

export default { setFavorites, startFetchingFavorites, removeFromFavorites };
