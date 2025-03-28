import React from "react";
import Gandalf from "../assets/Gandalf.webp";
import { Link } from "react-router";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <h3 className="header__subtitle">Search for your favorite</h3>
          <h1 className="header__maintitle">Lord of the Rings</h1>
          <h3 className="header__subtitle">Characters here!</h3>
          <div className="header__sub">
            <Link to='/characters'>
              <button className="header__sub--button">Let's get started</button>
            </Link>
            <img className="header__sub--img" src={Gandalf} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
