"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Padel from '../app/padel/page';
import Football from '../app/football/page';
import Volleyball from '../app/volleyball/page';
import Basketball from '../app/basketball/page';
import Tennis from '../app/tennis/page';
import Pickleball from '../app/pickleball/page';

const SportCarousel = () => {
  const sports = [
    { component: Padel, path: '/padel' },
    { component: Football, path: '/football' },
    { component: Volleyball, path: '/volleyball' },
    { component: Basketball, path: '/basketball' },
    { component: Tennis, path: '/tennis' },
    { component: Pickleball, path: '/pickleball' },
  ];

  return (
    <div className="sm:hidden w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={sports.findIndex((sport) => sport.path === window.location.pathname)}
        className="w-full h-full"
      >
        {sports.map((sport, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <sport.component />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SportCarousel;