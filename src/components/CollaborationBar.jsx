import React from 'react'
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
function CollaborationBar() {
  return (
    <div className='work-whith-uss-container'>
        <div className="contact-uss">
           <h1>Lavora con noi</h1>
           <h4>Contattaci</h4>
           <div className="contact">
               <div className="phone-mail">
                   <div className="phone">
                       <img src={phone} alt="" />
                       <a href="tel:3282397191">328-2397191</a>
                   </div>
                   <div className="mail">
                       <img src={mail} alt="" />
                       <a href="mailto:francesco.muci@hotmail.it">francesco.muci@hotmail.it</a>
                   </div>
               </div>
               <div className="social">
                   <ul>
                       <li><a href="#"><img  src={facebook} alt="" /></a></li>
                       <li><a href="#"><img src={instagram} alt="" /></a></li>
                       <li><a href="#"><img src={twitter} alt="" /></a></li>
                       <li><a href="#"><img src={linkedin} alt="" /></a></li>
                   </ul>
               </div>
           </div>
        </div>
    </div>
  )
}

export default CollaborationBar
