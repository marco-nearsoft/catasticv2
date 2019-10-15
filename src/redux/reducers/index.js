import { combineReducers } from "redux";
import currentImage from "./currentImage";
import favorites from "./favorites";
import errorMessage from "./errorMessage";
import isFavoritesInfoReady from "./isFavoritesInfoReady";

export default combineReducers({ currentImage, favorites, errorMessage, isFavoritesInfoReady });
