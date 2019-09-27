import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { setCurrentImage } from "../../../redux/actions";
import Loader from "react-loader-spinner";
import style from "./style";

const ConnectedHome = props => {
  return (
    <main css={style}>
      <div className="image-wrapper">
        {props.currentImage.url ? (
          <img className="main-image" src={props.currentImage.url} />
        ) : (
          <Loader
            type="Circles"
            color="#06ca06"
            height={100}
            width={100}
            css={style.loader}
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
  setCurrentImage
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedHome);

export default Home;
