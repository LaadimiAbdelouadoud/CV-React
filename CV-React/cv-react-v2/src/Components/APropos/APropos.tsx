import React from "react"
import "./APropos.css"

function APropos(){
    return(
        <section id="APropos">
        <div id="divAPropos">
            <h1>A PROPOS</h1>
            <div className="AboutMe">
                <ul>
                    <li><i className="fa fa-calendar" aria-hidden="true"></i> 02/12/2003</li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><a href="https://www.google.com/maps/place/Rabat/@33.9692189,-6.8572628,12z/data=!3m1!4b1!4m6!3m5!1s0xda76b871f50c5c1:0x7ac946ed7408076b!8m2!3d33.9715904!4d-6.8498129!16zL20vMGZzNDQ?entry=ttu" target="blank"> Maroc, Rabat</a></li>
                    <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:abdelouadoudlaadimi2003@gmail.com">abdelouadoudlaadimi2003@gmail.com</a></li>
                    <li><i className="fa fa-mobile" aria-hidden="true"></i><a href="tel:+212637804988"> +212637804988</a></li>
                    <li><i className="fa fa-linkedin-square" aria-hidden="true"></i><a href="https://www.linkedin.com/in/abdelouadoud-laadimi-b83328267 " target="blank" > Mon LinkedIn</a></li>
                </ul>
            </div> 
        </div>
    </section>
    )
}

export default APropos