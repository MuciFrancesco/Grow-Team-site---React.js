
import React, { useRef } from 'react'
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import arrowRight from "../assets/arrow-right.svg"
import arrowTop from "../assets/arrow-up.svg"


function Footer({handleScroll}) {
  return (
    <>
    <div className='footer'>
      <div className='footer-info'>
        <img src={logo} alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nulla neque molestiae, ad nesciunt temporibus! Ipsum, vel blanditiis dolore.</p>
        <div className='footer-social'>
          <ul>
            <li><a className="social-icon-outline" href="#">
              <img src={facebook} alt="" />
            </a></li>
            <li><a className="social-icon-outline" href="#">
              <img src={twitter} alt="" />
            </a></li>
            <li><a className="social-icon-outline" href="#">
              <img src={instagram} alt="" />
            </a></li>
            <li><a className="social-icon-outline" href="#">
              <img src={linkedin} alt="" />
            </a></li>
          </ul>
        </div>
      </div>
      <div className='footer-links'>
        <ul>
          <h3>Service</h3>
          <li><a href="">Storia dell'azienda</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Servizi</a></li>
          <li><a href="">Politica Privacy</a></li>
        </ul>
        <ul>
          <h3>Info</h3>
          <li><a href="">La nostra missione</a></li>
          <li><a href="">I nostri obiettivi</a></li>
          <li><a href="">Chi siamo</a></li>
          <li><a href="">Il nostro Team</a></li>
        </ul>
      </div>
      <div className='footer-subsribe'>
        <h3>Iscriviti ora</h3>
        <h5>Inizia il tuo viaggio</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='form'>
          <input type="text" placeholder='Inserisci Email' />
          <button><img src={arrowRight} alt="" /></button>
        </div>
      </div>
      
    </div>
    <div onClick={handleScroll} className='return-to-top'>
      <img  src={arrowTop} alt="" />
    </div>
    <div className="subfooter">
      <div className='copy-right'>
        <p><span>Ego Team</span> @ 2022 All Right Reserved</p>
      </div>
      <div className="subfooter-links">
        <ul>
          <li><a href="">Legal</a></li>
          <li><a href="">SiteMap</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms and Condition</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer