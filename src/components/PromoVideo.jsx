import React from "react";
import promoVideo from "../assets/promo-video.jpg";
import play from "../assets/play-solid.svg";
const linkYoutube =
  "https://www.youtube.com/watch?v=Y6aYx_KKM7A&ab_channel=Simplilearn";

function PromoVideo() {
  return (
    <section className="promo-video">
      <div className="promo-video-img">
        <img src={promoVideo} alt="" />
        <div className="promo-video-bg" />
      </div>
      <div className="promo-video-text">
        <h1>GrowTeam ti aiuta con il tuo Business</h1>
        <div className="promo-video-play">
          <a href={linkYoutube}>
            {" "}
            <img src={play} alt="" />
          </a>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
      </div>
    </section>
  );
}

export default PromoVideo;
