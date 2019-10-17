import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import {
  setCurrentImage,
  startFetchingCurrentImage,
  startLikingImage
} from "../../../redux/actions";
import { GREEN } from "../../../constants/COLORS";
import style from "./style";
import useErrorMessage from "./useErrorMessage";

const ConnectedHome = props => {
  useEffect(() => {
    if (!props.currentImage.url) {
      props.startFetchingCurrentImage({
        onSuccess: () => {},
        onError: () => {}
      });
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const { ErrorMessage, setErrorMessage } = useErrorMessage();

  return (
    <main css={style}>
      <ErrorMessage />
      <div className="image-wrapper">
        {props.currentImage.url ? (
          <img className="main-image" src={props.currentImage.url} />
        ) : (
          <Loader color={GREEN} type="Circles" height={100} width={100} />
        )}
      </div>
      <div className="buttons-wrapper">
        <button
          className={loading ? "" : "reject"}
          disabled={loading}
          onClick={() => {
            setLoading(true);
            props.startFetchingCurrentImage({
              onSuccess: () => {
                setLoading(false);
                setErrorMessage(null);
              },
              onError: () => {
                setLoading(false);
                setErrorMessage("Couldn't load image");
              }
            });
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button
          className={loading ? "" : "accept"}
          disabled={loading}
          onClick={() => {
            setLoading(true);
            props.startLikingImage({
              image: props.currentImage,
              isFavoritesInfoReady: props.isFavoritesInfoReady,
              onSuccess: () => {
                setLoading(false);
                setErrorMessage(null);
              },
              onError: () => {
                setLoading(false);
                setErrorMessage("Couldn't load image");
              }
            });
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = ({
  currentImage,
  errorMessage,
  isFavoritesInfoReady
}) => {
  return {
    currentImage,
    errorMessage,
    isFavoritesInfoReady
  };
};

const mapDispatchToProps = {
  setCurrentImage,
  startFetchingCurrentImage,
  startLikingImage
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedHome);

export default Home;
