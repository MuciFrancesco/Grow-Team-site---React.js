import React from 'react'
import Grow from "../assets/Grow.png"

function TopbarInfo({returnUpPage}) {
  return (
    <div ref={returnUpPage} className='topbar-info'>
      <img src={Grow} alt="" />
      {window.innerWidth>380?<a className='mail'  href="mailto:francesco.muci@hotmail.it">francesco.muci@hotmail.it</a>:<a className='mail'  href="mailto:francesco.muci@hotmail.it" style={{margin:"1rem", fontSize:"12px"}}>francesco.muci@hotmail.it</a>}
      <p className='divide'>|</p>
      {window.innerWidth>380?<p className='cell'>Chiamaci per maggiori informazioni:<span><a className='cell-a' href='tel:3282397191'>328 2397191</a></span></p>:null}
    </div>
  )
}

export default TopbarInfo
