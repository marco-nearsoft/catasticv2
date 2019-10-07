import currentImage from "./currentImage";

const { setCurrentImage, startFetchingCurrentImage } = currentImage;

function setFavorites(payload) {
  return { type: SET_FAVORITES, payload };
}

function removeFromFavorites(payload) {
  return { type: REMOVE_FROM_FAVORITES, payload };
}

function startFetchingFavorites(payload) {
  return { type: START_FETCHING_FAVORITES, payload };
}

export {
  setCurrentImage,
  startFetchingCurrentImage,
  setFavorites,
  removeFromFavorites,
  startFetchingFavorites
};
