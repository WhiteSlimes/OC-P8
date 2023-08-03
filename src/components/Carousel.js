import React, { useState } from "react";
import ArrowRight from "../assets/arrow_right.png"
import ArrowLeft from "../assets/arrow_left.png"
import "../sass/components/_carousel.scss"

function Carousel({ pictures }){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function handlePrevClick() {
        setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
    }
    
    function handleNextClick() {
        setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
    }

    if (pictures.length === 1) {
        return (
          <div className='carousel'>
            <img src={pictures[0]} alt="Apartment" className='carousel__image'/>
          </div>
        );
      }
    
      return (
        <div className='carousel'>
          <img src={ArrowLeft} alt='Previous' className='carousel__arrow carousel__arrow--left' onClick={handlePrevClick} />
          <img src={pictures[currentImageIndex]} alt="Apartment" className='carousel__image'/>
          <img src={ArrowRight} alt='Next' className='carousel__arrow carousel__arrow--right' onClick={handleNextClick} />
    
          <div className="carousel__indicator">
            <p>{currentImageIndex + 1}/{pictures.length}</p>
          </div>
        </div>
      );
}

export default Carousel