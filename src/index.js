import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

function AppWrapper() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
