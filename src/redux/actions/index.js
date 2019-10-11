import currentImage from "./currentImage";
import favorites from "./favorites";

const { setCurrentImage, startFetchingCurrentImage } = currentImage;
const { setFavorites, startFetchingFavorites, removeFromFavorites } = favorites;

export {
  setCurrentImage,
  startFetchingCurrentImage,
  setFavorites,
  removeFromFavorites,
  startFetchingFavorites
};
