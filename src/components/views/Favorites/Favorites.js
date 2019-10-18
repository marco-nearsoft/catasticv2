import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./style";
import {
  startRemovingFromFavorites,
  startFetchingFavorites
} from "../../../redux/actions/";
import FavoriteItem from "./FavoriteItem";
import useErrorMessage from "../../useErrorMessage";

const ConnectedFavorites = props => {
  useEffect(() => {
    if (!props.isFavoritesInfoReady) {
      props.startFetchingFavorites({
        onSuccess: message => {
          setErrorMessage(message);
        },
        onError: message => {
          setErrorMessage(message);
        }
      });
    }
  }, []);

  const { ErrorMessage, setErrorMessage } = useErrorMessage();

  return (
    <div css={style}>
      <ErrorMessage />
      <span className="page-title">Favorites</span>
      <div className="favorites-list-container">
        {props.favorites.map(image => {
          return (
            <FavoriteItem
              image={image}
              key={image.id}
              startRemovingFromFavorites={image => {
                props.startRemovingFromFavorites({
                  image,
                  onSuccess: message => {
                    setErrorMessage(message);
                  },
                  onError: message => {
                    setErrorMessage(message);
                  }
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ favorites, isFavoritesInfoReady }) => {
  return {
    favorites,
    isFavoritesInfoReady
  };
};

const mapDispatchToProps = {
  startRemovingFromFavorites,
  startFetchingFavorites
};

const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFavorites);

export default Favorites;
