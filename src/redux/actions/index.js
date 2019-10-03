function setCurrentImage(payload) {
  return { type: "SET_CURRENT_IMAGE", payload };
}

function startFetchingCurrentImage(payload) {
  return { type: "START_FETCHING_CURRENT_IMAGE", payload };
}

export { setCurrentImage, startFetchingCurrentImage };
