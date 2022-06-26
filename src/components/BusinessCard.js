import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
function BusinessCard({ array, textLorem, card }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
      const onResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', onResize);
      return () => {
          window.removeEventListener("resize", onResize)
      }
  }, [setWidth])

  const handleScrollTo = (index) => (e) => {
    if (card[index]) {
      card[index].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const linkStyle = {
    color: "blue",
    transition: "0.5s ease",
  };
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={700}
        interval={3500}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        showArrows={true?width>550:false}
      >
        {array.map((el, i) => (
          <div className='business-card' key={el.id} title='imagem'>
            <img src={el.img} alt='foto non disponibile' />
            <div className='bg'></div>
            <div className='business-card-text'>
              <h5>{el.intro}</h5>
              <h1>{el.title}</h1>
              <p>{el.text ? el.text : textLorem}</p>
              {el.id === 0 ? (
                <Link to='/about-us' style={linkStyle}>
                  <button>Scopri ora</button>
                </Link>
              ) : el.id === 1 ? (
                <Link to='/services'>
                  {" "}
                  <button>Scopri ora</button>
                </Link>
              ) : el.id === 2 ? (
                <Link to='/team'>
                  <button>Scopri ora</button>
                </Link>
              ) : el.id === 3 ? (
                <Link to='/contact-us'>
                  <button>Scopri ora</button>
                </Link>
              ) : (
                <button onClick={handleScrollTo(i)}>Scopri ora</button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BusinessCard;
