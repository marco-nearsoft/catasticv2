import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FavoriteItem = ({ data, removeFromFavorites }) => {
  return (
    <div
      className="favorites-list-item"
      style={{
        backgroundImage: `url(${data.url})`
      }}
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
