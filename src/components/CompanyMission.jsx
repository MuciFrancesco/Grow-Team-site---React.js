import React, { useState } from "react";
import grafich from "../assets/grafich.png";

function CompanyMission() {
  const textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quibusdam ipsam nam impedit rerum id perferendis, quae cum doloribus aut laboriosam dolore sapiente eum.";

  const [showText, setShowText] = useState({
    activeDiv: null,
    object: [
      { id: 1, title: "La nostra missione", text: textContent },
      { id: 2, title: "I nostri successi", text: textContent },
      { id: 3, title: "Il nostro inizio", text: textContent },
    ],
  });

  const handleOpenActive = (i) => {
    setShowText({ ...showText, activeDiv: showText.object[i] });
  };
  const toggleActiveStyle = (i) => {
    if (showText.object[i] === showText.activeDiv) {
      return "active";
    } else {
      return "inactive";
    }
  };

  return (
    <div className='company-mission'>
      <h4>Il nostro obiettivo</h4>
      <h1>La nostra missione</h1>
      <p>{textContent}</p>
      <div className='mission'>
        <div className='mission-object'>
          {showText.object.map((el, i) => (
            <div
              className='mission-text'
              key={i}
              onClick={() => handleOpenActive(i)}
            >
              <div className='mission-text-div'>
                {el.title}
                <p className={toggleActiveStyle(i)}>{el.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='mission-img'>
          <img src={grafich} alt='' />
        </div>
      </div>
    </div>
  );
}

export default CompanyMission;
