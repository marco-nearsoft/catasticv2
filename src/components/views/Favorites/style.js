import { css } from "@emotion/core";

const style = css`
  width: 80%;
  margin: auto;
  text-align: center;
  max-width: 700px;
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
  }

  .remove-button {
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: #fff;
    background-color: red;
    padding: 1rem;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
  }
`;

export default style;
