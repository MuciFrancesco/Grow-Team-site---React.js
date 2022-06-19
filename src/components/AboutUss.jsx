import React, { useCallback } from 'react'
import  about from "../assets/about-us.jpg"
import { Link } from "react-router-dom";


function AboutUss() {
const OpenToTopPage=useCallback(()=>{
    window.scroll(0,0)
},[])
  return (
    <div className='about-uss'>
      <div className='about-img'>
        <img src={about} alt="" />
        <div className='bg'></div>
      </div>
      <div className='about-card'>
        <div className='about-text'>
          <h1>Scopri chi siamo</h1>
          <p>Ipsum delectus excepturi hic quas praesentium aspernatur cupiditate animi ipsam magni! Quo, autem sequi similique aspernatur itaque sint temporibus. Impedit at totam voluptate.</p>
        </div>
        <div className='about-list'>
          <ul className='ul-1'>
            <li>Business services</li>
            <li>Soluzioni immediate</li>
            <li> IT Control Solution</li>
          </ul>
           <ul className='ul-2'>
            <li>Business Activity</li>
            <li>Attivi 24h su 24</li>
            <li> IT Menagment</li>
          </ul>
        </div>
        <Link onClick={OpenToTopPage} to="/about-us"><button>Scopri di più</button></Link>
      </div>
    </div>
  )
}

export default AboutUss
