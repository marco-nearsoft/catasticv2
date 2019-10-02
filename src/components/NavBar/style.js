import { css } from "@emotion/core";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 700px;

  & .navlink {
    text-decoration: none;
    padding: 1rem 2rem;
    display: inline-block;
    font-size: 1rem;
    font-family: sans-serif;
    margin: 1rem 0;
  }
  & .active {
    background-color: #000;
    color: #fff;
  }
`;

export default style;
