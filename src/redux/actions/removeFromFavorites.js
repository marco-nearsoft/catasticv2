import { REMOVE_FROM_FAVORITES } from "./types";

function removeFromFavorites(payload) {
  return { type: REMOVE_FROM_FAVORITES, payload };
}

export default removeFromFavorites;
