import { SET_ERROR_MESSAGE } from "./types";

function setErrorMessage(payload) {
  return { type: SET_ERROR_MESSAGE, payload };
}

export default { setErrorMessage };
