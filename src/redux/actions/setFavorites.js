import { SET_FAVORITES } from "./types";

function setFavorites(payload) {
  return { type: SET_FAVORITES, payload };
}

export default setFavorites;
