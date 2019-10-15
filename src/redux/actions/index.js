import currentImage from "./currentImage";
import favorites from "./favorites";
import errorMessage from "./errorMessage";
import favoritesStatus from "./favoritesStatus";

const { setCurrentImage, startFetchingCurrentImage } = currentImage;
const { setFavorites, startFetchingFavorites, removeFromFavorites, startRemovingFromFavorites, startLikingImage, addImageToFavorites } = favorites;
const { setErrorMessage } = errorMessage;
const { setFavoritesStatus } = favoritesStatus;

export {
  setCurrentImage,
  startFetchingCurrentImage,
  setFavorites,
  removeFromFavorites,
  startFetchingFavorites,
  startRemovingFromFavorites,
  startLikingImage,
  addImageToFavorites,
  setErrorMessage,
  setFavoritesStatus
};
