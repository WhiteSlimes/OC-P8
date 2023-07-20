import React, {useState} from "react";
import ArrowUp from "../assets/arrow_up.png";
import ArrowDown from "../assets/arrow_down.png";
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
            <button className="collapse__button" onClick={toggleCollapse}>
                <span className="collapse__title">{title}</span>
                <img src={isCollapsed ? ArrowDown : ArrowUp} alt="flèche description" className={`collapse__arrow ${isCollapsed ? "collapse__arrow--down" : "collapse__arrow--up"}`} />
            </button>
            {!isCollapsed && <div className="collapse__description">{description}</div>}
        </div>
    )
}

export default Collapse