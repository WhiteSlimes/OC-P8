import React from "react"
import { useLocation } from "react-router-dom"
import "../sass/components/_banner.scss"
import HomeImage from "../assets/home_image.png"
import AboutImage from "../assets/about_image.png"

const Banner = () =>{
    const location = useLocation();
    const getBannerImage = () => {
        if (location.pathname === "/about"){
            return AboutImage;
        }else{
            return HomeImage;
        }
    }

    return (
        <div className="banner">
            {location.pathname === '/' && <p className="banner_image-text">Chez vous, et partout ailleurs</p>}
            <img src={getBannerImage()} alt="paysage" className="banner_image"/>
        </div>
    );
}

export default Banner;