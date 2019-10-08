import { SET_CURRENT_IMAGE } from "../actions/types";

const currentImage = (state = {}, action) => {
  if (action.type === SET_CURRENT_IMAGE) {
    return action.payload;
  }
  return state;
};

export default currentImage;
