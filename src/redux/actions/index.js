import currentImage from "./currentImage";
import favorites from "./favorites";
import errorMessage from "./errorMessage";

const { setCurrentImage, startFetchingCurrentImage } = currentImage;
const { setFavorites, startFetchingFavorites, removeFromFavorites, startRemovingFromFavorites, startLikingImage, addImageToFavorites } = favorites;
const { setErrorMessage } = errorMessage;

export {
  setCurrentImage,
  startFetchingCurrentImage,
  setFavorites,
  removeFromFavorites,
  startFetchingFavorites,
  startRemovingFromFavorites,
  startLikingImage,
  addImageToFavorites,
  setErrorMessage
};
