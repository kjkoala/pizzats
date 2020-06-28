import React, { FC } from 'react';
import Swiper from 'react-id-swiper';

export const Slider: FC = () => {
  const setting = {
    pagination: {
      el: '.slider__btns',
      clickable: true,
    },
  };
  return (
    <Swiper {...setting}>
      <div className="slider__container"><img src={require('../assets/images/slid-1.png')} /></div>
      <div className="slider__container"><img src={require('../assets/images/slid-1.png')} /></div>
      <div className="slider__container"><img src={require('../assets/images/slid-1.png')} /></div>
      <div className="slider__container"><img src={require('../assets/images/slid-1.png')} /></div>
    </Swiper>
  );
};
