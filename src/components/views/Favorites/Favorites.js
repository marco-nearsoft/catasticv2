import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import {
  removeFromFavorites,
  startFetchingFavorites
} from "../../../redux/actions/";

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

const ConnectedFavorites = props => {
  useEffect(() => {
    if (!props.favorites.length) {
      props.startFetchingFavorites();
    }
  }, []);

  return (
    <div css={style}>
      <span className="page-title">Favorites</span>
      <div className="favorites-list-container">
        {props.favorites.map(image => {
          return (
            <FavoriteItem
              data={image}
              key={image.id}
              removeFromFavorites={props.removeFromFavorites}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = { removeFromFavorites, startFetchingFavorites };

const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFavorites);

export default Favorites;
