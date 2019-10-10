import { css } from "@emotion/core";
import COLORS from "../../constants/COLORS";
const { BLACK, WHITE } = COLORS;

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 70rem;

  .navlink {
    text-decoration: none;
    padding: 2rem 3rem;
    display: inline-block;
    font-size: 2rem;
    font-family: sans-serif;
    margin: 2rem 0;
  }
  .active {
    background-color: ${BLACK};
    color: ${WHITE};
  }
`;

export default style;
