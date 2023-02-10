/* eslint-disable no-console */
// import { Swiper, SwiperSlide } from "framework7-react";
// import { Block,BlockTitle, Navbar, Page, Swiper, SwiperSlide } from 'framework7-react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/Autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import useWindowSize from '../../hooks/useWindowSize';

SwiperCore.use([Autoplay, Navigation]);

function Crousel() {
  const [slideCount, setSlideCount] = React.useState(1);
  const { width } = useWindowSize();

  useEffect(() => {
    handleSildes(width);
  }, [width]);

  const handleSildes = (width: any) => {
    if (width > 1200) {
      return setSlideCount(4);
    } else if (width > 1024) {
      return setSlideCount(3);
    } else if (width > 768) {
      return setSlideCount(2);
    } else {
      return setSlideCount(1);
    }
  };

  return (
    <div className='slider-wrap pt-8'>
      <div className='slider-container '>
        <div className='title pb-4'>
          <h2 className='title center flex justify-center text-center font-mono text-[34px] font-bold'>
            See what our students have created
          </h2>
        </div>

        <Swiper
          slidesPerView={slideCount}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-4',
            nextEl: '.swiper-button-next-4',
          }}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1,

          //   },
          //   640: {
          //     slidesPerView: 1,

          //   },
          //   768: {
          //     slidesPerView: 2,

          //   },
          //   1024: {
          //     slidesPerView: 3,

          //   },
          //   1200: {
          //     slidesPerView: 4,

          //   },
          // }}
          className='swiper-wrapper pb-70 pt-5'
        >
          <SwiperSlide className='item step-card'>
            <Image
              src='/images/img-1.jpg'
              alt='slide1'
              width={280}
              height={400}
              className='step-card h-[400px] '
            />
          </SwiperSlide>
          <SwiperSlide className='item step-card'>
            <Image
              src='/images/img-2.jpg'
              alt='slide2'
              width={280}
              height={400}
              className='step-card h-[400px] '
            />
          </SwiperSlide>
          <SwiperSlide className='item step-card'>
            <Image
              src='/images/img-3.jpg'
              alt='slide3'
              width={280}
              height={400}
              className='step-card step-card h-[400px] '
            />
          </SwiperSlide>
          <SwiperSlide className='item step-card'>
            <Image
              src='/images/img-4.jpg'
              alt='slide3'
              width={280}
              height={400}
              className='step-card h-[400px] '
            />
          </SwiperSlide>
          <SwiperSlide className='item step-card'>
            <Image
              src='/images/img-5.jpg'
              alt='slide4'
              width={280}
              height={400}
              className='step-card h-[400px] '
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        // icon='material-symbols:arrow-circle-left-rounded'
        className='swiper-button-prev swiper-button-prev-4'
      />
      <div
        // icon='material-symbols:arrow-circle-right'
        className='swiper-button-next swiper-button-next-4'
      />
    </div>
  );
}

export default Crousel;
