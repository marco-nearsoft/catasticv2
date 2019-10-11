import { SET_FAVORITES, REMOVE_FROM_FAVORITES, ADD_IMAGE_TO_FAVORITES } from "../actions/types";

const favorites = (state = [], action) => {
  if (action.type === SET_FAVORITES) {
    return action.payload;
  }
  if (action.type === REMOVE_FROM_FAVORITES) {
    return state.filter(function(value) {
      return value.id !== action.payload.id;
    });
  }
  if (action.type === ADD_IMAGE_TO_FAVORITES) {
    return state.concat([action.payload]);
  }
  return state;
};
export default favorites;
