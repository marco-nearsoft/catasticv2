import { SET_FAVORITES_STATUS } from "./types";

function setFavoritesStatus(payload) {
  return { type: SET_FAVORITES_STATUS, payload };
}

export default { setFavoritesStatus };
