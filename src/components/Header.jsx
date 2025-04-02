import React from "react";
import Pikachu from "../assets/Pikachu.png"
import { Link } from "react-router";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <h3 className="header__subtitle">Search your favorite</h3>
          <h1 className="header__maintitle secondary__font">POKEMON</h1>
          <h3 className="header__subtitle">here!</h3>
          <div className="header__sub">
            <Link to='/pokemon'>
              <button className="header__sub--button secondary__font">Let's get started</button>
            </Link>
            <img className="header__sub--img" src={Pikachu} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
