import { combineReducers } from "redux";
import currentImage from "./currentImage";
import favorites from "./favorites";
import errorMessage from "./errorMessage";

export default combineReducers({ currentImage, favorites, errorMessage });
