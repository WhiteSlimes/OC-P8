import React, {useState, useEffect, useLayoutEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../sass/pages/_accomodation.scss"
import data from "../data.json"

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
            
        </div>
    )
}

export default Accomodation