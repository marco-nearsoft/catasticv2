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
import ErrorMessage from "../../ErrorMessage";

const ConnectedHome = props => {
  useEffect(() => {
    if (!props.currentImage.url) {
      props.startFetchingCurrentImage();
    }
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <main css={style}>
      <ErrorMessage message={props.errorMessage} />
      <div className="image-wrapper">
        {props.currentImage.url ? (
          <img className="main-image" src={props.currentImage.url} />
        ) : (
          <Loader
            color={GREEN}
            type="Circles"
            height={100}
            width={100}
          />
        )}
      </div>
      <div className="buttons-wrapper">
        <button
          className={loading ? "inactive" : "reject"}
          onClick={() => {
            if (loading) {
              return;
            }
            setLoading(true);
            props.startFetchingCurrentImage({
              callback: () => {
                setLoading(false);
              }
            });
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button
          className={loading ? "inactive" : "accept"}
          onClick={() => {
            if (loading) {
              return;
            }
            setLoading(true);
            props.startLikingImage({
              image: props.currentImage,
              isFavoritesInfoReady: props.isFavoritesInfoReady,
              callback: () => {
                setLoading(false);
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

const mapStateToProps = ({ currentImage, errorMessage, isFavoritesInfoReady }) => {
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
