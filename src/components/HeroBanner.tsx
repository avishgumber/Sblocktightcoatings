import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Section1 from './section1'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    title: 'sample1',
    paragraph: 'sample',
    link: '/about',
    imageSrc: '/images/hero.jpg'
  },
  {
    title: 'sample2',
    paragraph: 'sample',
    link: '/products',
    imageSrc: '/images/hero.jpg'
  },
  {
    title: 'sample3',
    paragraph: 'sample',
    link: '/about',
    imageSrc: '/images/hero.jpg'
  },
  {
    title: 'sample4',
    paragraph: 'sample',
    link: '/products',
    imageSrc: '/images/hero.jpg'
  }
]

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { it } from 'node:test';

export default function HeroBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
              <Section1 
              title={item.title}
              paragraph={item.paragraph}
              imgSrc={item.imageSrc}
              link={item.link}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
