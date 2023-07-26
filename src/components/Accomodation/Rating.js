import starRed from "../../assets/star_red.png"
import starGrey from "../../assets/star_grey.png"
import "../../sass/components/_rating.scss"

function Rating({ rating }){
    const numRedStar = Math.round(rating)

    const numGreyStar = 5 - numRedStar

    const redStars = new Array(numRedStar).fill(null)
    const greyStars = new Array(numGreyStar).fill(null)

    return(
        <div className="rating">
            {redStars.map((star, index) => (
                <img key={index} src={starRed} alt="star-red"/>
            ))}
            {greyStars.map((star, index) => (
                <img key={index} src={starGrey} alt="star-grey"/>
            ))}
        </div>
    )
}

export default Rating