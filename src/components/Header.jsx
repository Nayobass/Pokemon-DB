import React from "react";
import Gandalf from "../assets/Gandalf.webp";
import { Link } from "react-router";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <h3 className="header__subtitle">Search your favorite</h3>
          <h1 className="header__maintitle secondary__font">Lord of the Rings</h1>
          <h3 className="header__subtitle">character quotes here!</h3>
          <div className="header__sub">
            <Link to='/quotes'>
              <button className="header__sub--button secondary__font">Let's get started</button>
            </Link>
            <img className="header__sub--img" src={Gandalf} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
