import { START_FETCHING_FAVORITES } from "./types";

function startFetchingFavorites(payload) {
  return { type: START_FETCHING_FAVORITES, payload };
}
export default startFetchingFavorites;
