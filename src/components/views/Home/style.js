import { css } from "@emotion/core";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 700px;

  @media (max-width: 400px) {
    width: 90%;
  }

  & .main-image {
    width: 100%;
  }
  & .image-wrapper {
    padding: 2rem;
    box-shadow: 0rem 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
    @media (max-width: 400px) {
      padding: 1rem;
    }
  }
  & .buttons-wrapper {
    position: relative;
    top: -2rem;
  }
  & .buttons-wrapper button {
    font-size: 2rem;
    background-color: #fff;
    padding: 1rem;
    border: 0.01rem solid #ccc;
    border-radius: 50rem;
    width: 6rem;
    height: 6rem;
    margin: 0 1rem;
    cursor: pointer;
    transition: all 0.2s;
    @media (max-width: 400px) {
      width: 5rem;
      height: 5rem;
      display: block;
      margin: 1rem auto;
    }
  }
  & .buttons-wrapper button:hover {
    color: red;
    transform: scale(1.1);
    box-shadow: 0.5rem 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);
  }
  & .buttons-wrapper .reject:hover {
    color: red;
  }
  & .buttons-wrapper .accept:hover {
    color: green;
  }
`;

export default style;
