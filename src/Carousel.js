import React from "react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//npm isntall node-sass
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './styles/Carousel.scss';
//custom scss here

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default () => {
    return (
        <div id="carousel">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><div className="temp"></div></SwiperSlide>
                <SwiperSlide><div className="temp"></div></SwiperSlide>
                <SwiperSlide><div className="temp"></div></SwiperSlide>
                <SwiperSlide><div className="temp"></div></SwiperSlide>
            </Swiper>
        </div>
    );
};