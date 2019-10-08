import { SET_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/types";

const favorites = (state = [], action) => {
  if (action.type === SET_FAVORITES) {
    return action.payload;
  }
  if (action.type === REMOVE_FROM_FAVORITES) {
    return state.filter(function(value) {
      return value.id !== action.payload.id;
    });
  }
  return state;
};
export default favorites;
