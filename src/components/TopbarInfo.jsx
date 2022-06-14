import React from 'react'
import Grow from "../assets/Grow.png"

function TopbarInfo({returnUpPage}) {
  return (
    <div ref={returnUpPage} className='topbar-info'>
      <img src={Grow} alt="" />
      <a className='mail'  href="mailto:francesco.muci@hotmail.it">francesco.muci@hotmail.it</a>
      <p className='divide'>|</p>
      <p className='cell'>Chiamaci per maggiori informazioni:<span><a className='cell-a' href='tel:3282397191'>328 2397191</a></span></p>
    </div>
  )
}

export default TopbarInfo
