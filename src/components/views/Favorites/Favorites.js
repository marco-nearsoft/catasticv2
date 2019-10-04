import React from "react";
import style from "./style";

const Favorites = () => (
  <div css={style}>
    <span className="page-title">Favorites</span>
    <div className="favorites-list-container">
      <div
        className="favorites-list-item"
        style={{
          backgroundImage:
            "url(https://image.shutterstock.com/image-photo/wide-angle-panorama-autumn-forestmisty-260nw-1195159864.jpg)"
        }}
      ></div>
      <div
        className="favorites-list-item"
        style={{
          backgroundImage: "url(https://cdn2.thecatapi.com/images/5sd.jpg)"
        }}
      ></div>
      <div
        className="favorites-list-item"
        style={{
          backgroundImage:
            "url(https://media3.s-nbcnews.com/j/newscms/2019_37/3008306/ss-190912-twip-05_a78cf5b1c44cee7e52b935b8983bc000.focal-360x700.jpg)"
        }}
      ></div>
    </div>
  </div>
);

export default Favorites;
