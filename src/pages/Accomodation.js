import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../sass/pages/_accomodation.scss"
import data from "../data.json"
import Carousel from "../components/Carousel";
import Title from "../components/Accomodation/Title";
import Location from "../components/Accomodation/Location";
import Tags from "../components/Accomodation/Tags";
import Host from "../components/Accomodation/Host";
import Rating from "../components/Accomodation/Rating";
import Collapse from "../components/Collapse";

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

    return (
        <div>
          {accomodation && (
            <>
              <Carousel pictures={accomodation.pictures} />
              <div className='presentation'>
                <div>
                  <Title title={accomodation.title} />
                  <Location location={accomodation.location} />
                  <Tags tags={accomodation.tags} />
                </div>
                <div className='hostandrating'>
                  <Host host={accomodation.host} />
                  <Rating rating={accomodation.rating} />
                </div>
              </div>
              <div className='collapsibles'>
                <Collapse title='Description' description={accomodation.description} page="accomodation"/>
                <Collapse title='Équipements' description={<ul class="equipments-list">{accomodation.equipments.map(item => <li>{item}</li>)}</ul>} page="accomodation"/>
              </div>
            </>
          )}
        </div>
      );
}

export default Accomodation