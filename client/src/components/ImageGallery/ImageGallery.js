import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageViewer from 'react-simple-image-viewer';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

// eslint-disable-next-line import/no-unresolved
import './Swiper.css';

import { Autoplay, FreeMode, Mousewheel, Scrollbar, Zoom, Thumbs, Navigation } from 'swiper';

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const image = [
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature',
    'http://placeimg.com/1500/500/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1500/500/nature',
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/1200/800/nature',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="c">
      <div id="p" className="swiper-button-prev" />
      <div id="n" className="swiper-button-next" />
      <Swiper
        spaceBetween={5}
        zoom
        loop
        effect="fade"
        longSwipes
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        watchSlidesProgress
        navigation={{
          nextEl: '#n',
          prevEl: '#p',
        }}
        mousewheel
        modules={[Autoplay, Mousewheel, FreeMode, Scrollbar, Zoom, Navigation, Thumbs]}
        slidesPerView="auto"
        className="mySwiper2"
      >
        {image.map((src, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
            <img src={src} alt="" onClick={() => openImageViewer(index)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          height: '70px',
          width: 'auto',
        }}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        // freeMode={true}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className="thumbsSwiper"
      >
        {image.map((src, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <img src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      {isViewerOpen && (
        <ImageViewer
          src={image}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 10,
          }}
          closeOnClickOutside
        />
      )}
    </div>
  );
}
