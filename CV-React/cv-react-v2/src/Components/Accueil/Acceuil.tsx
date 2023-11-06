import React from "react"
import {Link} from "react-scroll"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import "./Acceuil.css"

function Acceuil(){

    const [text1] = useTypewriter({
        words: [' en savoir plus.' , ' mieux me connaitre.'],
        typeSpeed: 100,
        loop: 0
    });

    return(
        <section id="Accueil">
        <div className="AcceuilText">
            <h1>BIENVENUE</h1>
            <p>Bienvenue dans ma page personnelle
            <br></br>
            Je suis LAADIMI Abdelouadoud,
            <br></br>
             Cliquez sur la fléche pour
            <span>
                {text1}
            </span>
            <span>
                <Cursor cursorStyle='|'/>
            </span>
            </p>
        </div>

        <div className="Arrow">
            <Link id="AProposLink" to="APropos" smooth={true} offset={0} spy={true} duration={500}>
                <i className="fa-solid fa-circle-chevron-down"></i>
            </Link>
        </div>

        </section>
    )

}

export default Acceuil