import React, { useEffect } from "react";
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

  return (
    <main css={style}>
      <ErrorMessage message={props.errorMessage} />
      <div className="image-wrapper">
        {props.currentImage.url ? (
          <img className="main-image" src={props.currentImage.url} />
        ) : (
          <Loader
            color={GREEN}
            className="custom-loader"
            type="Circles"
            height={100}
            width={100}
          />
        )}
      </div>
      <div className="buttons-wrapper">
        <button
          className="reject"
          onClick={() => {
            props.startFetchingCurrentImage();
            props.setCurrentImage({ id: null, url: null });
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button
          className="accept"
          onClick={() => {
            props.startLikingImage(props.currentImage);
            props.setCurrentImage({ id: null, url: null });
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    currentImage: state.currentImage,
    errorMessage: state.errorMessage
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
