import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import style from "./globals.css";
import store from "./redux/store";

function AppWrapper() {
  return (
    <Provider store={store} css={style}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
