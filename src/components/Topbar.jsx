import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <nav>
      <h1></h1>
        <div className='topbar-links'>
        <Link to="/">HOME</Link>
        <Link to="/about-us">Chi siamo</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact-us">Contatti</Link>
        <Link to="/services">Servizi</Link>
        <button>Iscriviti</button>
        </div>

    </nav>

  )
}

export default Topbar
