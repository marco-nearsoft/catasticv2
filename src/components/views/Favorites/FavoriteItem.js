import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { favoritesListItemBackground } from "./style";

const FavoriteItem = ({ data, removeFromFavorites }) => {
  return (
    <div
      className="favorites-list-item"
      css={favoritesListItemBackground(data.url)}
    >
      <FontAwesomeIcon
        icon={faTimes}
        className="remove-button"
        onClick={() => {
          removeFromFavorites(data);
        }}
      />
    </div>
  );
};

export default FavoriteItem;
