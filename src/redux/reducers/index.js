import { combineReducers } from "redux";
import currentImage from "./currentImage";
import favorites from "./favorites";

export default combineReducers({ currentImage, favorites });
