
import React, { useCallback } from 'react'
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import arrowRight from "../assets/arrow-right.svg"
import arrowTop from "../assets/arrow-up.svg"
import { Link } from 'react-router-dom'


function Footer({handleScroll}) {
  const OpenToTopPage=useCallback(()=>{
    window.scroll(0,0)
},[])
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
          <Link onClick={OpenToTopPage} to="/about-us"><li><a href="">Storia dell'azienda</a></li></Link>
          <Link onClick={OpenToTopPage} to="/about-us"><li><a href="">About Us</a></li></Link>
          <Link onClick={OpenToTopPage} to="/services"><li><a href="">Servizi</a></li></Link>
          <Link onClick={OpenToTopPage} to="/"><li><a href="#">Politica Privacy</a></li></Link>
        </ul>
        <ul>
          <h3>Info</h3>
          <Link onClick={OpenToTopPage} to="/"><li><a href="">La nostra missione</a></li></Link>
          <Link onClick={OpenToTopPage} to="/services"><li><a href="">I nostri obiettivi</a></li></Link>
          <Link onClick={OpenToTopPage} to="/about-us"><li><a href="">Chi siamo</a></li></Link>  
          <Link onClick={OpenToTopPage} to="/team"><li><a href="">Il nostro Team</a></li></Link>
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
