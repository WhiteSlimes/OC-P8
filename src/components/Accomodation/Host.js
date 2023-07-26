import "../../sass/components/_host.scss"

function Host({ host }){
    return(
        <div className="host">
            <p className="host__name">{host.name}</p>
            <img className="host__picture" src={host.picture} alt="Photo de profil"/>
        </div>
    )
}

export default Host