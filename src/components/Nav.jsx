import React from "react";
import Logo from "../assets/POKELogo.png";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav id="navbar">
      <Link to="/" className="navbar__home">
        <img className="navbar__img" src={Logo} alt="" />
      </Link>
      <div className="navbar__links">
        <Link to="/pokemon" className="navbar__links--link firstlink">
          Pokémon
        </Link>
        <Link to="/pokedex" className="navbar__links--link">
          Pokedex
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
