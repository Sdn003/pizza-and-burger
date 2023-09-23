import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  EffectCoverflow, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import './Swiper.css';

import pizza_1 from "../images/offer_info/pizza/offer_1.jpg";
import pizza_2 from "../images/offer_info/pizza/offer_2.jpg";
import pizza_3 from "../images/offer_info/pizza/offer_3.jpg";
import pizza_4 from "../images/offer_info/pizza/offer_4.jpg";
import pizza_5 from "../images/offer_info/pizza/offer_5.jpg";
import pizza_6 from "../images/offer_info/pizza/offer_6.jpg";
import pizza_7 from "../images/offer_info/pizza/offer_7.jpg";


import burger_3 from "../images/offer_info/burger/offer_3.jpg";
import burger_4 from "../images/offer_info/burger/offer_4.jpg";
import burger_5 from "../images/offer_info/burger/offer_5.jpg";



function InfiniteSwiper() {

    const offer_images = [
      { image: pizza_1 },
      { image: pizza_2 },
      { image: pizza_3 },
      { image: burger_3 },
      { image: pizza_4 },
      { image: burger_4 },
      { image: pizza_5 },
      { image: burger_5 },
      { image: pizza_6 },
      { image: pizza_7 },
    ];


  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        spaceBetween={1}
        slidesPerView={"auto"}
        loop={true}
        pagination={{ clickable: true }}
        navigation

        className="swiper_container"
      >
        {offer_images.map((offer,i) => {
            return (
              <Fragment key={i}>
                <SwiperSlide className="slide">
                    <img src={offer.image} alt="slider_pic"/>
                </SwiperSlide>
              </Fragment>
            );
        })}
        
      
      </Swiper>
    </>
  );
    
}

export default InfiniteSwiper;
