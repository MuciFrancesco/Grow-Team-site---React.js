import React from "react";
import philosophyImg from "../assets/about-video.jpg";
import play from "../assets/play-solid.svg";
import { linkYoutube } from "../document/array.js";
function AboutPhilosophy() {
  return (
    <div className="philosophy-container">
      <div className="philosophy-flex">
        <div className="philosophy-img">
          <div className="bg"></div>
          <img src={philosophyImg} alt=""></img>
          <a href={linkYoutube}>
            {" "}
            <img src={play} alt="" />
          </a>
        </div>
        <div className="philosophy-text">
          <h4>Scopri</h4>
          <h1>La nostra filosofia</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            quaerat saepe et at provident corrupti porro ipsum, voluptatem
            maiores hic magni, cupiditate deleniti repellendus dolores incidunt
            cumque quo velit Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta a minus id ea cum error atque voluptas vel eum dolorem
            impedit odit excepturi distinctio incidunt, at, doloribus sint,
            voluptatibus.
          </p>
          <button>Scopri di più</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPhilosophy;
