import { SET_FAVORITES_STATUS } from "../actions/types";

const isFavoritesInfoReady = (state = false, action) => {
  switch (action.type) {
    case SET_FAVORITES_STATUS:
      return action.payload;
    default:
      return state;
  }
};
export default isFavoritesInfoReady;
