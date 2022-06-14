import React from 'react'
import kristina from "../assets/team-kristina.jpg"
import bob from "../assets/team-bob.jpg"
import ali from "../assets/team-ali.jpg"
import robert from "../assets/team-robert.jpg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"

const team=[{id:0, img:kristina, name:"Kristina",role:"Team Leader"},{id:1, img:bob, name:"Bob Anderson",role:"Web Designer"},{id:2, img:ali, name:"Ali Thoms",role:"Marketing Executor"},{id:3, img:robert, name:"Robert Wilmson",role:"Creative"},]


function Team() {
  return (
    <div className='container-team'>
        <div className='flex-team'>
            <div className='team-presentation'>
              <h1>Il nostro team</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='team-group'>
                {team.map((el,i)=>{
                    return(
                     <div key={i} className='team-card'>
                         <img className='img' src={el.img} alt="" />
                         <h4>{el.name}</h4>
                         <p>{el.role}</p>
                         <div className='team-reference'>
                           <ul>
                             <li><a href="#"><img src={facebook} alt="" /></a></li>
                             <li><a href="#"><img src={twitter} alt="" /></a></li>
                             <li><a href="#"><img src={instagram} alt="" /></a></li>
                             <li><a href="#"><img src={linkedin} alt="" /></a></li>
                           </ul>
                         </div>
                     </div>
                    )
                })}
            </div>
      </div>
    </div>
  )
}

export default Team
