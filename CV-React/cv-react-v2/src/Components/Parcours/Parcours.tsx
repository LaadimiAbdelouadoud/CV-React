import React from "react"
import "./Parcours.css"

function Parcours(){

    return(
        <section id="Parcours">
        <div id="divParcours">
            <h1>MON PARCOURS</h1>
            <div className="Parcours">
            <ul>
                <li><i className="fa fa-book" aria-hidden="true"></i> Bac Sciences Mathématiques B.</li>
                <li><i className="fa fa-graduation-cap" aria-hidden="true"></i> CPGE Filiere Mathématiques Physiques.</li>
                <li><i className="fa fa-laptop" aria-hidden="true"></i> Ecole Mohammadia d'Ingénieurs Filiére<br/>Informatique et Digitalisation.</li>
            </ul>
            </div> 
        </div>
    </section>
    )
}
export default Parcours