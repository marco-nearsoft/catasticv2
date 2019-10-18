import { SET_CURRENT_IMAGE } from "../actions/types";

const currentImage = (state = { id: null, url: null }, action) => {
  switch (action.type) {
    case SET_CURRENT_IMAGE:
      return action.payload;
    default:
      return state;
  }
};

export default currentImage;
