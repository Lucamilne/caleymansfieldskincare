import React from "react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//npm isntall node-sass
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './styles/Carousel.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default () => {
    return (
        <section id="carousel">
            <Swiper
                slidesPerView={2}
                spaceBetween={16}
                grabCursor={true}
                navigation
                centeredSlides={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={require("./images/products/Image01.jpg")} alt="Skin Care Products"></img></SwiperSlide>
                <SwiperSlide><img src={require("./images/products/Image02.jpg")} alt="Skin Care Products"></img></SwiperSlide>
                <SwiperSlide><img src={require("./images/products/Image03.jpg")} alt="Skin Care Products"></img></SwiperSlide>
                <SwiperSlide><img src={require("./images/products/Image04.jpg")} alt="Skin Care Products"></img></SwiperSlide>
                <SwiperSlide><img src={require("./images/products/Image05.jpg")} alt="Skin Care Products"></img></SwiperSlide>
                <SwiperSlide><img src={require("./images/products/Image06.jpg")} alt="Skin Care Products"></img></SwiperSlide>
                <SwiperSlide><img src={require("./images/products/Image07.jpg")} alt="Skin Care Products"></img></SwiperSlide>
            </Swiper>
        </section>
    );
};