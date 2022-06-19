import React from 'react'
import close from "../assets/close.svg"

function SubscribeButton({closeSubscribeBur}) {
  return (
    <section className='subscribe-form-container' >
        <div className="subscribe-form-close">
            <div className="close-svg" onClick={closeSubscribeBur}>
                 <img src={close} alt="" />
            </div>
        </div>
        <div className="subscribe-form">
            <h1>Iscriviti alla nostra Comunity</h1>
            <h3>Cresci con noi</h3>
            <form action="">
                <label htmlFor="">Nome e cognome</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email"/>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
                <button>Iscriviti</button>
            </form>
        </div>
    </section>
  )
}

export default SubscribeButton
