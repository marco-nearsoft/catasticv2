import { css } from "@emotion/core";
import COLORS from "../../../constants/COLORS";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 70rem;

  @media (max-width: 400px) {
    width: 90%;
  }

  .main-image {
    width: 100%;
  }
  .image-wrapper {
    padding: 2.5rem;
    box-shadow: 0rem 0rem 1rem 0.5rem ${COLORS.TRANSPARENT_BLACK};
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
    background-color: ${COLORS.WHITE};
    border: 0.01rem solid ${COLORS.LIGHT_GRAY};
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
    box-shadow: 0.5rem 0.5rem 0.5rem 0rem ${COLORS.TRANSPARENT_BLACK};
  }
  .buttons-wrapper .reject:hover {
    color: ${COLORS.RED};
  }
  .buttons-wrapper .accept:hover {
    color: ${COLORS.GREEN};
  }
  .custom-loader {
    color: ${COLORS.GREEN};
  }
`;

export default style;
