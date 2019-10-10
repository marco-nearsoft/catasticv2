import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import {
  setCurrentImage,
  startFetchingCurrentImage
} from "../../../redux/actions";
import COLORS from "../../../constants/COLORS";
import style from "./style";

const ConnectedHome = props => {
  useEffect(() => {
    if (!props.currentImage.url) {
      props.startFetchingCurrentImage();
    }
  }, []);

  return (
    <main css={style}>
      <div className="image-wrapper">
        {props.currentImage.url ? (
          <img className="main-image" src={props.currentImage.url} />
        ) : (
          <Loader
            color={COLORS.GREEN}
            className="custom-loader"
            type="Circles"
            height={100}
            width={100}
          />
        )}
      </div>
      <div className="buttons-wrapper">
        <button className="reject">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="accept">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    currentImage: state.currentImage
  };
};

const mapDispatchToProps = {
  setCurrentImage,
  startFetchingCurrentImage
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedHome);

export default Home;
