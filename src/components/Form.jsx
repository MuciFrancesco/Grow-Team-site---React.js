import React from 'react'
import phone from "../assets/phone-red.svg"
import mail from "../assets/mail-red.svg"
import map from "../assets/map.svg"

function Form() {
  return (
    <div className='form-container'>
        <div className="contact-us">
            <h1>Contatti</h1>
            <div className="phone">
               <img src={phone} alt="" />
               <a href="tel:3282397191">328-2397191</a>
            </div>
            <div className="mail">
               <img src={mail} alt="" />
               <a href="mailto:francesco.muci@hotmail.it">francesco.muci@hotmail.it</a>
            </div>
            <div className="map">
               <img src={map} alt="" />
               <div className="location-description">
                  <p>298/C Wilson Street</p>
                  <p>Italy Puglia LE</p>
               </div>

            </div>
        </div>
        <div className="contact-form">
            <h1>Contattaci</h1>
            <form action="">
                <div className="form-info">
                   <input type="text" placeholder='Nome' />
                   <input type="email" placeholder='inserisci Email'/>
                </div>
                <div className="form-message">
                    <input type="text" placeholder='Oggetto' />
                    <textarea type="textarea" placeholder='Scrivi qui il tuo messaggio' rows="8" cols="60"/>
                    <button>Invia</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
