"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import dynamic from 'next/dynamic';

const Padel = dynamic(() => import('../app/padel/page'), { ssr: false });
const Football = dynamic(() => import('../app/football/page'), { ssr: false });
const Volleyball = dynamic(() => import('../app/volleyball/page'), { ssr: false });
const Basketball = dynamic(() => import('../app/basketball/page'), { ssr: false });
const Tennis = dynamic(() => import('../app/tennis/page'), { ssr: false });
const Pickleball = dynamic(() => import('../app/pickleball/page'), { ssr: false });

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
    <div className="sm:hidden w-full h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={sports.findIndex((sport) => sport.path === window.location.pathname) || 0}
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