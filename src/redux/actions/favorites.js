import { SET_FAVORITES, START_FETCHING_FAVORITES, REMOVE_FROM_FAVORITES } from "./types";

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
