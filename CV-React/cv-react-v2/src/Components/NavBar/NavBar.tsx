import React from "react"
import {useState} from "react"
import {Link} from "react-scroll"
import { NavLink } from "react-router-dom"

import "./NavBar.css"

function NavBar() {

    return (
        <div className="NavBar">
            <div className="NavLogo">
                LAADIMI ABDELOUADOUD
            </div>

            <ul className="NavMenu">
                <li>
                    <Link id="AccueilLink" to="Accueil" smooth={true} offset={0} spy={true} duration={500}>ACCUEIL</Link>
                </li>
                <li>
                    <Link id="AProposLink" to="APropos" smooth={true} offset={0} spy={true} duration={500}>A PROPOS</Link>
                </li>
                <li>
                    <Link id="ParcoursLink" to="Parcours" smooth={true} offset={0} spy={true} duration={500}>PARCOURS</Link>
                </li>
                <li>
                    <Link id="CompetencesLink" to="Competences" smooth={true} offset={0} spy={true} duration={500}>COMPETENCES</Link>
                </li>
                <li>
                    <Link id="MeContacterLink" to="MeContacter" smooth={true} offset={-200} spy={true} duration={500}>Me Contacter</Link>
                </li>
            </ul>
        </div>
    );
}
export default NavBar