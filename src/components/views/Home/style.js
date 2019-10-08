import { css } from "@emotion/core";
import colors from "../../../constants/colors";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 700px;

  @media (max-width: 400px) {
    width: 90%;
  }

  .main-image {
    width: 100%;
  }
  .image-wrapper {
    padding: 2.5rem;
    box-shadow: 0rem 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
    @media (max-width: 400px) {
      padding: 2rem;
    }
  }
  .buttons-wrapper {
    position: relative;
    top: -3rem;
  }
  .buttons-wrapper button {
    font-size: 3rem;
    background-color: #fff;
    border: 0.01rem solid #ccc;
    border-radius: 50rem;
    width: 8rem;
    height: 8rem;
    margin: 0 2rem;
    cursor: pointer;
    transition: all 0.2s;
    @media (max-width: 400px) {
      width: 7rem;
      height: 7rem;
      display: block;
      margin: 2rem auto;
    }
  }
  .buttons-wrapper button:hover {
    transform: scale(1.1);
    box-shadow: 0.5rem 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);
  }
  .buttons-wrapper .reject:hover {
    color: ${colors.red};
  }
  .buttons-wrapper .accept:hover {
    color: ${colors.green};
  }
  .custom-loader {
    color: ${colors.green};
  }
`;

export default style;
