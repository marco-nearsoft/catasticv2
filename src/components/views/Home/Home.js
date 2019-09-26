import React from "react";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <main css={style}>
    <div className="image-wrapper">
      <img
        className="main-image"
        src="https://cdn.thewirecutter.com/wp-content/uploads/2018/04/catbeds-2x1-05936.jpg"
      />
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

export default Home;
