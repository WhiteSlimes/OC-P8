import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../sass/layout/_header.scss"

function Header(){
    const location = useLocation();
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Kasa"/>
            <nav className="header__nav">
                <Link to="/" className={`header__link ${location.pathname === '/' ? 'header__link--active' : ''}`}>Accueil</Link>
                <Link to="/about" className={`header__link ${location.pathname === '/about' ? 'header__link--active' : ''}`}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header