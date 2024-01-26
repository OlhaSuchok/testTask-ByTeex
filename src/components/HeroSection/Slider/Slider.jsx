import React from "react";
// import "swiper/swiper-bundle.css";
import { galleryItems } from "date/imageGallary";

import { SwiperWrapper, SwiperSlideWrapper } from "./Slider.styled";

export default function ImageSlider() {
  return (
    <SwiperWrapper
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
    >
      {galleryItems.map((item, index) => (
        <SwiperSlideWrapper key={index}>
          <img
            src={item.original}
            alt={item.description}
            // style={{ width: "80px" }}
          />
        </SwiperSlideWrapper>
      ))}
    </SwiperWrapper>
  );
}
