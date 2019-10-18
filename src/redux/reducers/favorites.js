import {
  SET_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_IMAGE_TO_FAVORITES
} from "../actions/types";

const favorites = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload;
    case REMOVE_FROM_FAVORITES:
      return state.filter(function(value) {
        return value.id !== action.payload.id;
      });
    case ADD_IMAGE_TO_FAVORITES:
      return state.concat([action.payload]);
    default:
      return state;
  }
};
export default favorites;
