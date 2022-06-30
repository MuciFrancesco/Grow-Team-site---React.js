import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Grow from "../assets/Grow.png";

function TopbarInfo({ returnUpPage }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setWidth]);
  return (
    <div ref={returnUpPage} className="topbar-info">
      <img src={Grow} alt="" />
      {window.innerWidth > 380 ? (
        <a className="mail" href="mailto:francesco.muci@hotmail.it">
          francesco.muci@hotmail.it
        </a>
      ) : (
        <a
          className="mail"
          href="mailto:francesco.muci@hotmail.it"
          style={{ margin: "0rem", fontSize: "12px" }}
        >
          francesco.muci@hotmail.it
        </a>
      )}
      <p className="divide">|</p>
      {width < 460 ? (
        <p className="cell">
          Cellulare:
          <span>
            <a className="cell-a" href="tel:3282397191">
              328 2397191
            </a>
          </span>
        </p>
      ) : (
        <p className="cell">
          Chiamaci per maggiori informazioni:
          <span>
            <a className="cell-a" href="tel:3282397191">
              328 2397191
            </a>
          </span>
        </p>
      )}
    </div>
  );
}

export default TopbarInfo;
