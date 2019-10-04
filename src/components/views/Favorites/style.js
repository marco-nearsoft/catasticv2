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
  }
`;

export default style;
