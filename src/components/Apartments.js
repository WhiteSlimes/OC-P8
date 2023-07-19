import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "../sass/components/_apartments.scss";

function Apartments(){
    return (
        <div className="apartments">
            {data.map((appartement) => (
                <Link to={`./accomodation/${appartement.id}`} key={appartement.title} className="apartments__item">
                    <div className="apartments__item-info">
                        <h2 className="apartments__item-title">{appartement.title}</h2>
                        <img className="apartments__item-image" src={appartement.cover} alt={appartement.title}/>
                    </div>
                </Link>
            ))} 
        </div>
    )
}

export default Apartments