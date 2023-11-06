import React from "react";
import {NavLink} from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import "./Footer.css"

function Footer(){

    const [text2] = useTypewriter({
        words: ["Besoin de plus d'informations?" , 'Cliquez ici.'],
        typeSpeed: 100,
        loop: 0
    });

    return(
        <footer id="MeContacter">
            <div className="SocialMedia">
                <ol>
                    <li><a href="https://www.facebook.com/abdeloua.abdel" target="blank"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                    <li><a href="https://www.instagram.com/abdelouadoud_ldm/" target="blank"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a href="https://github.com/LaadimiAbdelouadoud" target="blank"><i className="fa-brands fa-github"></i> GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/abdelouadoud-laadimi-b83328267/" target="blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                </ol>
            </div>
            <div className="Contact">
                <p>
                    <span>
                        {text2}
                    </span>
                    <span>
                        <Cursor cursorStyle='|'/>
                    </span>
                </p>
            </div>
            
            <div className="ContactBtn">
                <NavLink to= '/MeContacter'>
                    <button>Me Contacter</button>
                </NavLink>    
            </div>
            <div className="CopyRight">
                <i className="fa-solid fa-copyright"></i> All Rights reserved.
            </div>

        </footer>
    )
}
export default Footer