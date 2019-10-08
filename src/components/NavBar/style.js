import { css } from "@emotion/core";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 70rem;

  & .navlink {
    text-decoration: none;
    padding: 2rem 3rem;
    display: inline-block;
    font-size: 2rem;
    font-family: sans-serif;
    margin: 2rem 0;
  }
  & .active {
    background-color: #000;
    color: #fff;
  }
`;

export default style;
