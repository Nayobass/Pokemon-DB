import React from 'react';
import Logo from "../assets/LOTRLogo.png"
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav id='navbar'>
        <img className='navbar__img' src={Logo} alt="" />
        <div className='navbar__links'>
            <Link to="/" className='navbar__links--link'>
                Home
            </Link>
            <Link to="/quotes" className='navbar__links--link'>
                Quotes
            </Link>
        </div>
    </nav>
  )
}

export default Nav
