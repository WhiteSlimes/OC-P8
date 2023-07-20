import React, {useState} from "react";
import ArrowUp from "../assets/arrow_up.png";

import "../sass/components/_collapse.scss";

function Collapse({title, description, page}){
    const [isCollapsed, setIsCollapsed] = useState(true)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const getCollapsePage = () => {
        if (page === "about") return "collapse--about"
        if (page === "accomodation") return "collapse--accomodation"
        return ""
    }

    return(
        <div className={`collapse ${getCollapsePage()}`}>
            <div className="collapse__header">
                <h2 className="collapse__title">{title}</h2>
                <img className={`collapse__arrow ${isCollapsed ? "collapse__arrow--down" : "collapse__arrow--up"}`} src={ArrowUp} alt="flèche description" onClick={toggleCollapse}/>
            </div>
            {!isCollapsed && <div className={`collapse__content ${!isCollapsed ? "collapse__content--visible" : "collapse__content--hidden"}`}>{description}</div>}
        </div>
    )
}

export default Collapse