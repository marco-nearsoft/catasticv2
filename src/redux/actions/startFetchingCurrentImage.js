import { START_FETCHING_CURRENT_IMAGE } from "./types";

function startFetchingCurrentImage(payload) {
  return { type: START_FETCHING_CURRENT_IMAGE, payload };
}

export default startFetchingCurrentImage;
