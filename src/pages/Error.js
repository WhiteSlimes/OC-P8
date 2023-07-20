import React from "react";
import { Link } from "react-router-dom";
import "../sass/pages/_error.scss"

function Error(){
    return(
        <div className="error">
            <h2 className="error__title">404</h2>
            <p className="error__message">Oups ! La page que vous demandez n'existe pas.</p>
            <Link className="error__link" to="/">Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error