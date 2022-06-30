import React from "react";
import { textLorem } from "../document/array";
import { Link } from "react-router-dom";
import whyChooseUs from "../assets/why-choose-us.svg";
import { useCallback } from "react";

function WhyCooseUs() {
  const OpenToTopPage = useCallback(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="why-couse-us-container">
      <div className="why-couse-us">
        <div className="why-couse-us-text">
          <h1>Perchè scegliere noi</h1>
          <p>{textLorem}</p>
          <div className="why-couse-us-btn">
            <Link onClick={OpenToTopPage} to="/about-us">
              <button className="btn-1">Scopri chi siamo</button>
            </Link>
            <Link onClick={OpenToTopPage} to="/services">
              <button className="btn-2">Esplora i nostri servizi</button>
            </Link>
          </div>
        </div>
        <div className="why-couse-us-img">
          <img src={whyChooseUs} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WhyCooseUs;
