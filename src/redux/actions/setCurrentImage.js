import { SET_CURRENT_IMAGE } from "./types";

function setCurrentImage(payload) {
  return { type: SET_CURRENT_IMAGE, payload };
}

export default setCurrentImage;
