import React from 'react'

function ServicesInfo({array,textLorem,card}) {

  return (
    <div className='services-info-container'>
        {array.map((el,i)=>
        <>
           <div className="service-info-card" key={el.id} ref={card[i]}  >
               <div className="service-info-text" >
                   <h1>{el.title}</h1>
                   <p>{textLorem}</p>
                    <button>Maggiori Info</button>
               </div>
               <div className="service-info-img">
                <img src={el.img} alt="" />
               </div>
           </div>
        </>
        )}
    </div>
  )
}

export default ServicesInfo
