import React from "react";
import { Link } from "react-router-dom";

function HowWork({ information, handleScroll }) {
  return (
    <div className="how-work-container">
      <div className="title">
        <h3>Cosa trattiamo</h3>
        <h1>I nostri principali investimenti</h1>
      </div>
      <div className="how-work-cards">
        {information.map((el, i) => {
          return (
            <div key={i} className="how-work-card">
              <h4>{el.title}</h4>
              <img src={el.img} alt="" />
              <p>{el.text}</p>
            </div>
          );
        })}
      </div>
      <Link to="/services">
        <button onClick={handleScroll}>Scopri di più</button>
      </Link>
    </div>
  );
}

export default HowWork;
