import React, {useState, useEffect, useLayoutEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../sass/pages/_accomodation.scss"
import data from "../data.json"
import Carousel from "../components/Carousel";
import Title from "../components/Accomodation/Title";
import Location from "../components/Accomodation/Location";
import Tags from "../components/Accomodation/Tags";

function Accomodation(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [accomodation, setAccomodation] = useState(null)

    useEffect(() => {
        const filteredData = data.find(element => element.id === id)
        if(!filteredData){
            navigate("/error")
        }else{
            setAccomodation(filteredData)
        }
    }, [id, navigate])

    return(
        <div>
            {accomodation && (
                <>
                <Carousel pictures={accomodation.pictures} />
                <div className="presentation">
                    <div>
                        <Title title={accomodation.title}/>
                        <Location location={accomodation.location}/>
                        <Tags tags={accomodation.tags} />
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default Accomodation