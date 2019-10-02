import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style";

const NavBar = () => {
  return (
    <div css={style}>
      <NavLink className="navlink" exact to="/">Home</NavLink>
      <NavLink className="navlink" to="/favorites">Favorites</NavLink>
    </div>
  );
};

export default NavBar;
