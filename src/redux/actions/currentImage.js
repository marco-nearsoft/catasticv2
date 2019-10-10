import { SET_CURRENT_IMAGE } from "./types";
import { START_FETCHING_CURRENT_IMAGE } from "./types";

function setCurrentImage(payload) {
  return { type: SET_CURRENT_IMAGE, payload };
}

function startFetchingCurrentImage(payload) {
  return { type: START_FETCHING_CURRENT_IMAGE, payload };
}

export default { setCurrentImage, startFetchingCurrentImage };
