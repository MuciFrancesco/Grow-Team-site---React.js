import React from "react";
import { Carousel } from "react-responsive-carousel";
import star from "../utilities/star";

function ClientOpinion({ opinion, loremSite }) {
  return (
    <div className="client-opinion-container">
      <div className="client-opinion-title">
        <h3>Cosa dicono</h3>
        <h1>I nostri clienti</h1>
      </div>
      <div className="container-slider">
        <Carousel
          showIndicators={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={1000}
          interval={3500}
        >
          {opinion.map((el, i) => (
            <div className="client-slider" key={el.id}>
              <div className="client-slide">
                <h4>{el.name}</h4>
                <p>{el.text}</p>
                <p>{star(el.feedBack)}</p>
                <a href={loremSite}>{loremSite}</a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ClientOpinion;
