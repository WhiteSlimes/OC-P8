import React from "react";
import footerLogo from "../assets/footer_logo.png";
import "../sass/layout/_footer.scss";

function Footer(){
    return(
        <footer className="footer">
            <img className="footer__logo" src={footerLogo} alt="Kasa-logo"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer