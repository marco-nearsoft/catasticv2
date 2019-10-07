import { combineReducers } from "redux";
import currentImage from "./currentImage";

const favorites = (state = [], action) => {
  if (action.type === "SET_FAVORITES") {
    return action.payload;
  }
  if (action.type === "REMOVE_FROM_FAVORITES") {
    var filtered = state.filter(function(value) {
      return value.id !== action.payload.id;
    });
    return filtered;
  }
  return state;
};

export default combineReducers({ currentImage, favorites });
