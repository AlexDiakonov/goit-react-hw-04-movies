import React from "react";
import style from "../styles/navBar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={style.navContainer}>
      <NavLink
        activeClassName={style.selected}
        className={style.homeLink}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={style.selected}
        className={style.moviesLink}
        exact
        to="/movies"
      >
        Movies
      </NavLink>
    </header>
  );
}
