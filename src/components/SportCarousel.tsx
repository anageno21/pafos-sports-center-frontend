"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hero from '@/components/Hero';

const SportCarousel = () => {
  const bgColor = '#851535';
  const sports = [
    {
      path: '/padel',
      title: 'Discover Padel at Pafos Sports Center',
      description: 'Experience world-class padel courts and a vibrant community in the heart of Pafos.',
      primaryButtonText: 'Book a Court',
      primaryButtonLink: '/booking',
      secondaryButtonText: 'Learn More',
      secondaryButtonLink: '/padel/about',
      imageSrc: '/assets/logos/mwpMED-padel.png',
      imageAlt: 'Pafos Sports Center Padel Image',
    },
    {
      path: '/football',
      title: 'Discover Football at Pafos Sports Center',
      description: 'Join our top-tier football facilities and vibrant community in the heart of Pafos.',
      primaryButtonText: 'Book a Pitch',
      primaryButtonLink: '/booking',
      secondaryButtonText: 'Learn More',
      secondaryButtonLink: '/football/about',
      imageSrc: '/assets/logos/mwpMED-football3.png',
      imageAlt: 'Pafos Sports Center Football Image',
    },
    {
      path: '/volleyball',
      title: 'Discover Volleyball at Pafos Sports Center',
      description: 'Enjoy premier volleyball courts and a dynamic community in the heart of Pafos.',
      primaryButtonText: 'Book a Court',
      primaryButtonLink: '/booking',
      secondaryButtonText: 'Learn More',
      secondaryButtonLink: '/volleyball/about',
      imageSrc: '/assets/logos/mwpMED-volleyball3.png',
      imageAlt: 'Pafos Sports Center Volleyball Image',
    },
    {
      path: '/basketball',
      title: 'Discover Basketball at Pafos Sports Center',
      description: 'Experience top-notch basketball courts and a vibrant community in the heart of Pafos.',
      primaryButtonText: 'Book a Court',
      primaryButtonLink: '/booking',
      secondaryButtonText: 'Learn More',
      secondaryButtonLink: '/basketball/about',
      imageSrc: '/assets/logos/mwpMED-basketball3.png',
      imageAlt: 'Pafos Sports Center Basketball Image',
    },
    {
      path: '/tennis',
      title: 'Discover Tennis at Pafos Sports Center',
      description: 'Enjoy world-class tennis courts and a dynamic community in the heart of Pafos.',
      primaryButtonText: 'Book a Court',
      primaryButtonLink: '/booking',
      secondaryButtonText: 'Learn More',
      secondaryButtonLink: '/tennis/about',
      imageSrc: '/assets/logos/mwpMED-tennis.png',
      imageAlt: 'Pafos Sports Center Tennis Image',
    },
    {
      path: '/pickleball',
      title: 'Discover Pickleball at Pafos Sports Center',
      description: 'Experience the excitement of pickleball with our state-of-the-art facilities in Pafos.',
      primaryButtonText: 'Book a Court',
      primaryButtonLink: '/booking',
      secondaryButtonText: 'Learn More',
      secondaryButtonLink: '/pickleball/about',
      imageSrc: '/assets/logos/mwpMED-pickleball3.png',
      imageAlt: 'Pafos Sports Center Pickleball Image',
    },
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
              <Hero
                backgroundColor={bgColor}
                title={sport.title}
                description={sport.description}
                primaryButtonText={sport.primaryButtonText}
                primaryButtonLink={sport.primaryButtonLink}
                secondaryButtonText={sport.secondaryButtonText}
                secondaryButtonLink={sport.secondaryButtonLink}
                imageSrc={sport.imageSrc}
                imageAlt={sport.imageAlt}
                imageWidth={225}
                imageHeight={75}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SportCarousel;