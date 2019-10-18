import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { favoritesListItemBackground } from "./style";

const FavoriteItem = ({ image, startRemovingFromFavorites }) => {
  return (
    <div
      className="favorites-list-item"
      css={favoritesListItemBackground(image.url)}
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="remove-button"
        onClick={() => {
          startRemovingFromFavorites(image);
        }}
      />
    </div>
  );
};

export default FavoriteItem;
