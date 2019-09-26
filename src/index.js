import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import style from "./globals.css";

function AppWrapper() {
  return (
    <div css={style}>
      <App />
    </div>
  );
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
