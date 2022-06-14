import React from 'react'
import teamBg from "../assets/about-us-bg.jpg"
function TeamBg({infoTeam}) {
  return (
    <div className='team-bg-container'>
      <img src={teamBg} alt="" />
      <div className="bg"></div>
      <div className='bg-text'>
        <h1>{infoTeam}</h1>
      </div>
    </div>
  )
}

export default TeamBg
