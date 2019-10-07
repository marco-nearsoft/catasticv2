import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Global } from "@emotion/core";
import Home from "../views/Home";
import Favorites from "../views/Favorites";
import NavBar from "../NavBar";
import globalStyle from "./globalStyle";

const App = () => {
  return (
    <Router>
      <Global styles={globalStyle} />
      <NavBar />
      <Route exact path="/" component={Favorites} />
      <Route path="/favorites" component={Favorites} />
    </Router>
  );
};

export default App;
