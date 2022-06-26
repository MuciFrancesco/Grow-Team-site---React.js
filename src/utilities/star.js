import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const star = (num) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (num >= index + 1) {
      return <AiFillStar key={index}  className='star' fill='#fca903' />;
    } else if (num >= index + 0.5) {
      return <BsStarHalf key={index} className='star'  fill='#fca903' />;
    } else {
      return <AiOutlineStar key={index} className='star' fill='#fca903' />;
    }
  });
};

export default star;
