import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../views/Home";
import Favorites from "../views/Favorites";
import NavBar from "../NavBar/";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </Router>
  );
};

export default App;
