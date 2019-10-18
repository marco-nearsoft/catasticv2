import { combineReducers } from "redux";
import currentImage from "./currentImage";
import favorites from "./favorites";
import isFavoritesInfoReady from "./isFavoritesInfoReady";

export default combineReducers({ currentImage, favorites, isFavoritesInfoReady });
