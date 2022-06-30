import React, { useCallback } from "react";
import { Link } from "react-router-dom";

function ServicesInfo({ array, textLorem, card }) {
  const OpenToTopPage = useCallback(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="services-info-container">
      {array.map((el, i) => (
        <>
          <div className="service-info-card" key={el.id} ref={card[i]}>
            <div className="service-info-img">
              <img src={el.img} alt="" />
              <div className="bg"></div>
              <div className="service-info-title">
                <h1>{el.title}</h1>
              </div>
            </div>
            <div className="service-info-text">
              <p>{textLorem}</p>
            </div>
            <Link onClick={OpenToTopPage} to="/contact-us">
              <button>Contattaci per maggiori Info</button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}

export default ServicesInfo;
