import React from "react";
import "./Competences.css"

function Competences(){
    return(
        <section id="Competences">
        <div id="divCompetences">
            <h1>MES COMPETENCES</h1>
            <div className="Competences">
                <ul>
                    <li><i className="fa-solid fa-c"></i> Programmation en language C</li>
                    <li><i className="fa-solid fa-database"></i> SQL</li>
                    <li><i className="fa-brands fa-html5"></i> HTML </li>
                    <li><i className="fa-brands fa-css3-alt"></i> CSS</li>
                    <li><i className="fa-brands fa-react"></i> React</li>
                    <li><i className="fa-brands fa-python"></i> Python</li>
                </ul>
            </div>

        </div>
    </section>
    )
}
export default Competences