import { SET_FAVORITES, START_FETCHING_FAVORITES, REMOVE_FROM_FAVORITES, START_REMOVING_FROM_FAVORITES, START_LIKING_IMAGE, ADD_IMAGE_TO_FAVORITES } from "./types";

function setFavorites(payload) {
  return { type: SET_FAVORITES, payload };
}

function startFetchingFavorites(payload) {
  return { type: START_FETCHING_FAVORITES, payload };
}

function removeFromFavorites(payload) {
  return { type: REMOVE_FROM_FAVORITES, payload };
}

function startRemovingFromFavorites(payload) {
  return { type: START_REMOVING_FROM_FAVORITES, payload };
};

function startLikingImage(payload) {
  return { type: START_LIKING_IMAGE, payload };
}

function addImageToFavorites(payload) {
  return { type: ADD_IMAGE_TO_FAVORITES, payload };
}

export default { setFavorites, startFetchingFavorites, removeFromFavorites, startRemovingFromFavorites, startLikingImage, addImageToFavorites };
