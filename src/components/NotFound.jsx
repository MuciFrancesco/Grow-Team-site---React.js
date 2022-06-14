import React from 'react'
import notFound from "../assets/errorPage.jpg"

function NotFound() {
  return (
    <div className='not-found-container'>
      <div className="not-found-img">
        <img src={notFound} alt="" />
      </div>
    </div>
  )
}

export default NotFound
