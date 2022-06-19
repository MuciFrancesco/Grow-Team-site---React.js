import React from 'react'
import services from "../assets/services.jpg"

function SubscribeBar() {
  return (
    <section className='subscribe-bar'>
        <div className="subscribe-bar-img">
            <img src={services} alt="" />
            <div className="subscribe-bar-bg"/>
        </div>
        <div className="subscribe-bar-text">
            <h1>GrowTeam ti aiuta con il tuo Business</h1>
            <button>Iscriviti ora</button>
        </div>
    </section>
  )
}

export default SubscribeBar
