import React from "react";
import CompanyMission from "./CompanyMission";

function TeamComponenets({ team, desctiption }) {
  return (
    <>
      <CompanyMission />
      <div className="team-container">
        <div className="team-components">
          <div className="team-style-one">
            <div className="style-one-img">
              <img src={team[0].img} alt="" />
            </div>
            <div className="style-one-text">
              <h1>{team[0].name}</h1>
              <p>{desctiption}</p>
              <div className="info">
                <h4>{team[0].role}</h4>
                <button>Scopri di più</button>
              </div>
            </div>
          </div>
          <div className="team-style-two">
            <div className="style-two-text">
              <h1>{team[1].name}</h1>
              <p>{desctiption}</p>
              <div className="info">
                <h4>{team[1].role}</h4>
                <button>Scopri di più</button>
              </div>
            </div>
            <div className="style-two-img" style={{ height: "100%" }}>
              <img src={team[1].img} style={{ objectFit: "contain" }} alt="" />
            </div>
          </div>
          <div className="team-style-one">
            <div className="style-one-img">
              <img src={team[2].img} alt="" />
            </div>
            <div className="style-one-text">
              <h1>{team[2].name}</h1>
              <p>{desctiption}</p>
              <div className="info">
                <h4>{team[0].role}</h4>
                <button>Scopri di più</button>
              </div>
            </div>
          </div>
          <div className="team-style-two" style={{ height: "450px" }}>
            <div className="style-two-text">
              <h1>{team[3].name}</h1>
              <p>{desctiption}</p>
              <div className="info">
                <h4>{team[3].role}</h4>
                <button>Scopri di più</button>
              </div>
            </div>
            <div className="style-two-img">
              <img src={team[3].img} style={{ objectFit: "cover" }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamComponenets;
