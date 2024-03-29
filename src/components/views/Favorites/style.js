import { css } from "@emotion/core";
import { WHITE, RED } from "../../../constants/COLORS";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 70rem;
  font-size: 3rem;

  .page-title {
    float: left;
  }

  .favorites-list-container {
    clear: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .favorites-list-item {
    min-width: 30%;
    height: 20rem;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 1%;
    position: relative;
    @media (max-width: 800px) {
      width: 48%;
    }
    @media (max-width: 500px) {
      width: 99%;
    }
  }

  .remove-button {
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: ${WHITE};
    background-color: ${RED};
    padding: 1rem;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
  }
`;

export const favoritesListItemBackground = imageURL => (
  css`
    background-image: url(${imageURL});
  `
)

export default style;
